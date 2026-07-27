describe('Login Success', () => {
    it('Deve realizar login com usuário válido', () => {
        
      // Acessa a página de login
        cy.visit('/signin');

        // Preenche as credenciais de um usuário válido 
        cy.get('[data-test="signin-username"]').should('be.visible').type('Raphael');
        cy.get('[data-test="signin-password"]').should('be.visible').type('05041983');

        // Envia o formulário de login
        cy.get('[data-test="signin-submit"]').click();

        // Valida que o login foi realizado com sucesso
        cy.contains('Raphael A').should('be.visible');
    });
});


describe('Login com credenciais inválidas', () => {
    it('Deve retornar erro ao tentar realizar login com usuário inválido', () => {
        // Acessa a página de login
        cy.visit('/signin');

        // Preenche um usuário inválido e uma senha válida
        cy.get('[data-test="signin-username"]').should('be.visible').type('Raphael');
        cy.get('[data-test="signin-password"]').should('be.visible').type('s3cret');

        // Tenta realizar o login
        cy.get('[data-test="signin-submit"]').click();

        // Valida a mensagem de erro apresentada pelo sistema
        cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
    });

    it('Deve retornar erro ao tentar realizar login com senha inválida', () => {

        // Acessa a página de login      
        cy.visit('/signin');
        
        // Preenche um usuário válido e uma senha inválida
        cy.get('[data-test="signin-username"]').should('be.visible').type('Katharina_Bernier');
        cy.get('[data-test="signin-password"]').should('be.visible').type('123456');

        // Tenta realizar o login
        cy.get('[data-test="signin-submit"]').click();

        // Valida a mensagem de erro apresentada pelo sistema
        cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
    });

    it('Deve retornar erro ao tentar realizar login com usuário e senha inválidos', () => {

        // Acessa a página de Login
        cy.visit('/signin');
        
        // Preenche credenciais inválidas
        cy.get('[data-test="signin-username"]').should('be.visible').type('Raphael');
        cy.get('[data-test="signin-password"]').should('be.visible').type('123456');

        // Tenta realizar o login
        cy.get('[data-test="signin-submit"]').click();

        // Valida a mensagem de erro apresentada pelo sistema
        cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
    });
});


