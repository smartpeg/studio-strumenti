const Username = "Username"
const Password = "Password"

describe('Livrea', () => {
	beforeEach(() => { Cypress.config('defaultCommandTimeout', 10000) });

	it('should handle potential cross-origin navigation', () => {
		cy.viewport(1775, 998);
		cy.get('div:nth-of-type(1) > input').should('be.visible').type(Username);
		cy.get('div:nth-of-type(2) > input').should('be.visible').type(Password);
		cy.get('button[type="submit"]').should('be.visible').click();
		cy.get('li:nth-of-type(4) > a').should('be.visible').click();
		cy.get('li:nth-of-type(4) li:nth-of-type(3) span.menu-text').contains('Relationships').should('be.visible').click();
	});
});