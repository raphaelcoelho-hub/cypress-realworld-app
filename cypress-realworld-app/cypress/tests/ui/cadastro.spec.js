describe('Cadastro de usuário', () => {
    it('Deve cadastrar usuário com sucesso usando informações corretas', () => {
    cy.visit('/signup')

        cy.get('[data-test="signup-first-name"]').should('be.visible').type('Juliana');
        cy.get('[data-test="signup-last-name"]').should('be.visible').type('Dutra');
        cy.get('[data-test="signup-username"]').should('be.visible').type('juliana.dutra');
        cy.get('[data-test="signup-password"]').should('be.visible').type('julianadutra');
        cy.get('[data-test="signup-confirmPassword"]').should('be.visible').type('julianadutra');
        cy.get('[data-test="signup-submit"]').should('be.visible').click();
        cy.location('pathname').should('eq', '/signin');
        
    })
})
        

















