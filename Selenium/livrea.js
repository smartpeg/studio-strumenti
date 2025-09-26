import { Builder, By, until } from "selenium-webdriver";
const Username = "Username"
const Password = "Password"

let driver;
driver = await new Builder()
	.forBrowser('chrome')
	.build();

await driver.manage().window().maximize();
await driver.get('https://smartpeg.livrea.eu/account/login');
await driver.wait(until.titleContains('Livrea') || until.urlContains('login'), 10000);

const usernameField = await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);
const passwordField = await driver.wait(until.elementLocated(By.css('input[type="password"]')), 10000);
const loginButton = await driver.wait(until.elementLocated(By.css('button[type="submit"], input[type="submit"]')), 10000);

await usernameField.sendKeys(Username);
await passwordField.sendKeys(Password);

await loginButton.click();

await driver.wait(until.urlContains('magicMirror'), 15000);

const analysisMenu = await driver.wait(
	until.elementLocated(By.xpath("//*[contains(text(), 'Analisys') or contains(text(), 'Analysis')]")), 
	10000
);

await analysisMenu.click();
await driver.sleep(2000);

const relationshipsMenu = await driver.wait(
	until.elementLocated(By.xpath("//*[contains(text(), 'Relationships')]")), 
	10000
);

await relationshipsMenu.click();

await driver.wait(until.urlContains('relationships') || until.titleContains('Relationships'), 10000);
await driver.quit();