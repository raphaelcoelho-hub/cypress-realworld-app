describe('Login Success', () => {
    it('Deve fazer Login com usuário Válido', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('[data-test="signin-username"]').type('Katharina_Bernier');
        cy.get('[data-test="signin-password"]').type('s3cret');
        cy.get('[data-test="signin-submit"]').click();
    });
});