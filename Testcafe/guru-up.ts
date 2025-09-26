import { Selector, ClientFunction } from 'testcafe';
const Username = "Username"
const Password = "Password"


const getPageUrl = ClientFunction(() => window.location.href);
const getBodyText = ClientFunction(() => document.body.innerText.slice(0, 1000));

fixture`Guru HRM Test`
	.page("https://app-hrcore-svil.azurewebsites.net/ui/login")
	.beforeEach(async t => await t.resizeWindow(1920, 1080) );

test('Guru Up', async t => {
	const usernameField = Selector('input[type="email"], input[name*="username"], #email, #username, input[type="text"]').nth(0);
	const passwordField = Selector('input[type="password"], input[name*="password"], #password').nth(0);

	await t
		.expect(usernameField.exists).ok('Username field not found')
		.expect(passwordField.exists).ok('Password field not found');

	await t.typeText(usernameField, Username, { replace: true });
	await t.typeText(passwordField, Password, { replace: true });

	let submitButton = Selector('button, input[type="submit"]').withText(/Login|Accedi/i).nth(0);
	if (!(await submitButton.exists))
		submitButton = Selector('button, input[type="submit"]').nth(0);

	if (await submitButton.exists && await submitButton.visible)
		await t.click(submitButton);
	else await t.pressKey('enter');

	const valutazioneElement = Selector('a.px-0').withText(/Valutazione/i);

	try { await t.expect(getPageUrl()).contains("home.aspx", { timeout: 20000 }); }
	catch { await t.expect(valutazioneElement.exists).ok('Login did not reach home page', { timeout: 20000 }); }

	if (await valutazioneElement.exists) await t.click(valutazioneElement);

	const sistemiValutazione = Selector('span.lblVoceMenu').withText(/Sistemi di valutazione/i).nth(0);
	if (await sistemiValutazione.exists) await t.click(sistemiValutazione);

	const dropdown = Selector('span.selection').nth(0);
	if (await dropdown.exists) {
		await t.click(dropdown);
		const option = Selector('li').withText('Valutato - Area non it').nth(0);
		if (await option.exists) await t.click(option);
	}

	const nameElement = Selector('*').withText(/pizzoli aurelio/i);
	await t.expect(nameElement.exists).ok('Name not found', { timeout: 10000 });

	const arrowButton = Selector('input[type="submit"].bottoneGrigliaDettaglio').nth(0);
	if (await arrowButton.exists) await t.click(arrowButton);

	const section = Selector('input[type="submit"].TabStripVerde, input[type="submit"].TabStripRosso').nth(0);
	if (await section.exists) await t.click(section);

	const formFields = Selector('select.dropValutazione');
	const count = await formFields.count;
	for (let i = 0; i < count; i++) {
		const field = formFields.nth(i);
		await t.click(field).click(field.find('option').nth(1));
	}

	const salvaButton = Selector('input[type="submit"].smallPrimaryButton').nth(0);
	if (await salvaButton.exists) await t.click(salvaButton);

	await t.wait(2000);
});
