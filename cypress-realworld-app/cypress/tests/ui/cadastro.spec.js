describe('Cadastro de usuário', () => {
    it('Deve cadastrar usuário com sucesso usando informações corretas', () => {

        // Acessa a tela de cadastro
        cy.visit('/signup')

        // Preenche os dados obrigatórios para criar um novo usuário
        cy.get('[data-test="signup-first-name"]').should('be.visible').type('Juliana');
        cy.get('[data-test="signup-last-name"]').should('be.visible').type('Dutra');
        cy.get('[data-test="signup-username"]').should('be.visible').type('juliana.dutra');
        cy.get('[data-test="signup-password"]').should('be.visible').type('julianadutra');
        cy.get('[data-test="signup-confirmPassword"]').should('be.visible').type('julianadutra');
        
        // Envia o formulário de cadastro
        cy.get('[data-test="signup-submit"]').should('be.visible').click();

        // Valida o redirecionamento para a tela de login
        cy.location('pathname').should('eq', '/signin');
    })

    it('Deve fazer login com o usuário cadastrado', () => {

        // Acessa a tlea de login
        cy.visit('/signin')

        // Preenche as credenciais do usuário cadastrado
        cy.get('[data-test="signin-username"]').should('be.visible').type('juliana.dutra');
        cy.get('[data-test="signin-password"]').should('be.visible').type('julianadutra');

        // Envia o formulário de login
        cy.get('[data-test="signin-submit"]').click();

        // Valida que o login foi realizado com sucesso
        cy.contains('Juliana D').should('be.visible');
    })
})


describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve impedir o cadastro quando houver campos obrigatórios em branco', () => {

        // Acessa a tela de cadastro
        cy.visit('/signup')

        // Preenche os campos obrigatórios, exceto o Last Name
        cy.get('[data-test="signup-first-name"]').should('be.visible').type('Juliana');
        
        // Clica no campo Last Name, digita e depois limpa para disparar validação
        cy.get('[data-test="signup-last-name"] input').click().type('teste').clear().trigger('blur');
        
         
        cy.get('[data-test="signup-username"]').should('be.visible').type('juliana.dutra');
        cy.get('[data-test="signup-password"]').should('be.visible').type('julianadutra');
        cy.get('[data-test="signup-confirmPassword"]').should('be.visible').type('julianadutra');
        
        // Valida a mensagem de erro e o estado do formulário
        cy.get('#lastName-helper-text').should('be.visible');
        cy.get('[data-test="signup-submit"]').should('be.disabled');
    });
});


















