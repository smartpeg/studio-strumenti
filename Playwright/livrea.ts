import { chromium, Browser, BrowserContext, Page } from "playwright";
const Username = "Username"
const Password = "Password"


let browser: Browser | null = null;
let context: BrowserContext | null = null;
let page: Page | null = null;

browser = await chromium.launch({ headless: false });

context = await browser.newContext();
page = await context.newPage();

await page.setViewportSize({ width: 1920, height: 1080 });
await page.waitForURL('**/account/login', { timeout: 10000 });

const usernameField = page.locator('input[type="text"]');
const passwordField = page.locator('input[type="password"]');
const loginButton = page.locator('button[type="submit"], input[type="submit"]');

await usernameField.waitFor({ state: 'visible', timeout: 10000 });
await passwordField.waitFor({ state: 'visible', timeout: 10000 });
await loginButton.waitFor({ state: 'visible', timeout: 10000 });

await usernameField.fill(Username);
await passwordField.fill(Password);
await loginButton.click();

await page.waitForURL('**/magicMirror**', { timeout: 15000 });

const analysisMenu = page.locator('text=/Analisys|Analysis/i');
await analysisMenu.waitFor({ state: 'visible', timeout: 10000 });

await analysisMenu.click();
await page.waitForTimeout(2000);

const relationshipsMenu = page.locator('span', { hasText: /^Relationships$/ });
await relationshipsMenu.waitFor({ state: 'visible', timeout: 10000 });
await relationshipsMenu.click();
await page.waitForURL('**/relationships**', { timeout: 10000 });
await page.screenshot({ path: 'success.png' });