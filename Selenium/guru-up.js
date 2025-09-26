import { Builder, By, until } from "selenium-webdriver";
const Username = "Username"
const Password = "Password"

let driver;
driver = await new Builder()
	.forBrowser('chrome')
	.build();

await driver.manage().window().setRect({ width: 1920, height: 1080 });
await driver.get("https://clienteprova2.guru-hrm.it/pages/login.aspx")
await driver.get("https://app-hrcore-svil.azurewebsites.net/ui/login?q=eyJ0ZW5hbnROYW1lIjoiY2xpZW50ZXByb3ZhMiIsImFwcGxpY2F0aW9uIjoiR3VydSJ9")
					
const usernameSelectors = [
	'input[type="email"]',
	'input[name*="email"]',
	'input[name*="username"]',
	'#email',
	'#username',
	'input[type="text"]'
];
const passwordSelectors = [
	'input[type="password"]',
	'input[name*="password"]',
	'#password'
];
const submitSelectors = [
	'input[type="submit"]',
	'button[type="submit"]',
	'button:contains("Login")',
	'button:contains("Accedi")'
];

let usernameField, passwordField, submitButton;
for (const selector of usernameSelectors) try {
	usernameField = await driver.findElement(By.css(selector));
	break;
} catch (e) { continue }

for (const selector of passwordSelectors) try {
	passwordField = await driver.findElement(By.css(selector));
	break;
} catch (e) { continue }

if (usernameField && passwordField) {
	await usernameField.clear();
	await usernameField.sendKeys(Username);
	await passwordField.clear();
	await passwordField.sendKeys(Password);
	for (const selector of submitSelectors) try {
		submitButton = await driver.findElement(By.css(selector));
		await submitButton.click();
		break;
	} catch (e) { continue }
}
			
await driver.wait(until.urlIs("https://clienteprova2.guru-hrm.it/pages/home.aspx"), 15000);
						
let valutazioneElement;
try {
	valutazioneElement = await driver.wait(
		until.elementLocated(By.xpath("//*[contains(text(), 'Valutazione')]")),
		5000
	);
} catch (error) {
	valutazioneElement = await driver.wait(
		until.elementLocated(By.xpath("//*[contains(@class, 'handshake') or contains(@src, 'handshake')] | //i[contains(@class, 'handshake')]")),
		5000
	);
}

await valutazioneElement.click();
const sistemiValutazione = await driver.wait(
	until.elementLocated(By.xpath("//*[contains(text(), 'Sistemi di valutazione')]")),
	5000
);
await sistemiValutazione.click();

const dropdown = await driver.wait(
	until.elementLocated(By.xpath("//select[contains(@name, 'operando') or contains(., 'Stai operando come')] | //div[contains(., 'Stai operando come')]")),
	5000
);
await dropdown.click();

const option = await driver.wait(
	until.elementLocated(By.xpath("//option[contains(text(), 'Valutato - Area non it')] | //div[contains(text(), 'Valutato - Area non it')]")),
	5000
);
await option.click();

const arrowButton = await driver.findElement(
	By.css("input[type='submit'].bottoneGrigliaDettaglio")
);
await arrowButton.click();

const ssection = await driver.findElement(By.css("input[type='submit'].TabStripVerde, input[type='submit'].TabStripRosso"));
await ssection.click();

const salvaButton = await driver.findElement(By.css("input[type='submit'].smallPrimaryButton"));
await salvaButton.click();

await driver.sleep(3000);

await driver.quit();