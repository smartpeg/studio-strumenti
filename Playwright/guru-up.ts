// guru_hrm_test.ts - Playwright version
import { chromium, Browser, Page } from "playwright";
const Username = "Username"
const Password = "Password"

let browser: Browser | null = null;
let page: Page | null = null;

browser = await chromium.launch({ headless: false });
page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto("https://clienteprova2.guru-hrm.it/pages/login.aspx");
await page.goto("https://app-hrcore-svil.azurewebsites.net/ui/login?q=eyJ0ZW5hbnROYW1lIjoiY2xpZW50ZXByb3ZhMiIsImFwcGxpY2F0aW9uIjoiR3VydSJ9");
const usernameSelectors = ['input[type="email"]', 'input[name*="email"]', 'input[name*="username"]', '#email', '#username', 'input[type="text"]'];
const passwordSelectors = ['input[type="password"]', 'input[name*="password"]', '#password'];
const submitSelectors = ['input[type="submit"]', 'button[type="submit"]', 'button:has-text("Login")', 'button:has-text("Accedi")'];
for (const selector of usernameSelectors)
	if (await page.locator(selector).count() > 0) {
		await page.locator(selector).fill(Username);
		break;
	}

for (const selector of passwordSelectors)
	if (await page.locator(selector).count() > 0) {
		await page.locator(selector).fill(Password);
		break;
	}

for (const selector of submitSelectors)
	if (await page.locator(selector).count() > 0) {
		await page.locator(selector).click();
		break;
	}


await page.waitForURL("https://clienteprova2.guru-hrm.it/pages/home.aspx", { timeout: 15000 });
let valutazioneElement = page.locator('text=Valutazione').first();

if (await valutazioneElement.count() === 0)
	valutazioneElement = page.locator('[class*="handshake"], [src*="handshake"]').first();
await valutazioneElement.click();

const sistemiValutazione = page.locator('text=Sistemi di valutazione').first();
await sistemiValutazione.click();

const dropdown = page.locator('span.selection').first();
await dropdown.click();
const option = page.locator('li').filter({ hasText: 'Valutato - Area non it' }).first();
await option.click();

const arrowButton = page.locator('input[type="submit"].bottoneGrigliaDettaglio').first();
await arrowButton.click();

const section = page.locator('input[type="submit"].TabStripVerde, input[type="submit"].TabStripRosso').first();
await section.click();
		const formFields = page.locator('select.dropValutazione');
const fieldCount = await formFields.count();
console.log(`Found ${fieldCount} form fields`);
		const salvaButton = page.locator('input[type="submit"].smallPrimaryButton').first();
await salvaButton.click();
await page.waitForTimeout(3000);

await page.screenshot({ path: 'guru_test_success.png' });
await browser.close()