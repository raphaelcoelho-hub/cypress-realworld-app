describe('Login Success', () => {
    it('Deve fazer Login com usuário Válido', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('input[name="username"]').type('Johndoe');
        cy.get('input[name="password"]').type('s3cret');
        cy.get('button[type="submit"]').click();




    })

})