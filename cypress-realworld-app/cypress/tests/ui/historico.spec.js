describe('Histórico de Transações', () => {

  it('Deve visualizar transação recém-realizada no histórico com sucesso', () => {
  
    // 1. Acessa a aplicação e realiza o login com usuário válido
    cy.visit('/login');
    cy.get('[data-test="signin-username"]').type('bruno.souza');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();
 
    // 2. Visualizar página inicial e clicar em ($ New) para nova transação
    cy.get('[data-test="nav-top-new-transaction"]').click();

    // 3. Escolher destinatário na lista
    cy.get('[data-test="user-list-search-input"]').type('Ana Silva');
    cy.get('[data-test="user-list-item-Z2angkXTA"]').click();

    // 4. Preencher valor, nota descritiva e enviar dinheiro
    cy.get('[data-test="transaction-create-amount-input"]').type('1000');
    cy.get('[data-test="transaction-create-description-input"]').type('teste');
    cy.get('[data-test="transaction-create-submit-payment"]').click();

    // 5. Validar a mensagem "Transaction Submitted"
    cy.get('[data-test="alert-bar-success"]').should('contain', 'Transaction Submitted');

    // 6. Navegar até a aba "Mine" na página principal da conta e validar a transação no histórico
    cy.get('[data-test="sidenav-home"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.contains('Bruno Souza paid Ana Silva').should('be.visible');

  });

  it('Deve exibir mensagem indicando que o usuário não possui transação', () => {
   
    // 1. Acessar a página e fazer login na aplicação
    cy.visit('/login');
    cy.get('[data-test="signin-username"]').type('raphael.coelho');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();
        
    // 2. Visualizar página inicial e clicar em (MINE) para acessar a página de histórico de transações
    cy.get('[data-test="nav-personal-tab"]').click();

    // 3. Validar a mensagem "No Transactions" e mostrar histórico sem transações
    cy.contains('No Transactions').should('be.visible');

  });

  it('Deve registrar a solicitação de pagamento para ambos os usuários', () => {
    
    // 1. Acessa a aplicação e realiza o login com usuário remtente válido
    cy.visit('/login');
    cy.get('[data-test="signin-username"]').type('ana.silva');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();

    // 2. Visualizar página inicial e clicar em ($ New) para nova transação
    cy.get('[data-test="nav-top-new-transaction"]').click();

    // 3. Escolher destinatário na lista
    cy.get('[data-test="user-list-search-input"]').type('Bruno Souza');
    cy.get('[data-test="user-list-item-sUzpjcMN6"]').click();

    // 4. Preencher valor, nota descritiva e solicitar dinheiro
    cy.get('[data-test="transaction-create-amount-input"]').type('2500');
    cy.get('[data-test="transaction-create-description-input"]').type('aluguel');
    cy.get('[data-test="transaction-create-submit-request"]').click();

    // 5. Validar a mensagem "Transaction Submitted"
    cy.get('[data-test="alert-bar-success"]').should('contain', 'Transaction Submitted');

    // 6. Clicar na aba "Mine" na página principal da conta e validar a transação no histórico
    cy.get('[data-test="sidenav-home"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.contains('Ana Silva requested Bruno Souza').parents('[data-test^="transaction-item"]').within(() => {
    cy.contains('aluguel').should('be.visible');
    cy.contains('+$2,500.00').should('be.visible');
    
    })

    // 7. Realizar Logout
    cy.get('[data-test="sidenav-signout"]').click();

    // 8. Realizar Login com usuário destinatário válido
    cy.get('[data-test="signin-username"]').type('ana.silva');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();

    // 9. Clicar na aba "Mine" na página principal da conta e validar a transação no histórico
    cy.get('[data-test="sidenav-home"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.contains('Ana Silva requested Bruno Souza').parents('[data-test^="transaction-item"]').within(() => {
    cy.contains('aluguel').should('be.visible');
    cy.contains('+$2,500.00').should('be.visible');

    })

   
  })

})


