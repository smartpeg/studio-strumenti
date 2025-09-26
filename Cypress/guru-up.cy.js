const Username = "Username"
const Password = "Password"

describe('Guru Up', () => {
	beforeEach(() => { Cypress.config('defaultCommandTimeout', 10000); });

	it('should login and fill form data with proper waits', () => {
		cy.viewport(1775, 998);
		cy.get('#btnLoginHrCore').should('be.visible').click();

		cy.get('#username').type(Username);
		cy.get('#password').type(Password);
		cy.get('#btnLogin').click();
	});
		cy.get('li:nth-of-type(1) div.lblVoceMenu').should('be.visible').click();
		cy.get('#kt_aside_tab_147 > div > div:nth-of-type(1)').should('be.visible').click();
		cy.get('span.selection').should('be.visible').click();
		cy.get('.select2-results li:nth-last-child(1)').should('be.visible').click();
		cy.get('div:nth-of-type(5) td:nth-of-type(7)').should('be.visible').click();
		cy.get('tbody .cellaSezioni:nth-last-child(1) > input').should('be.visible').click({ force: true });
		cy.get('#ctl00_cphGuruMaster_btn463').should('be.visible').click();

		cy.get('#ctl00_cphGuruMaster_btnSalva').should('be.visible').click();
});
