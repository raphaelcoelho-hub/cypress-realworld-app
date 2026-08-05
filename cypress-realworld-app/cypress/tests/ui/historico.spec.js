describe('Histórico de Transações', () => {
  it('Deve visualizar transação recém-realizada no histórico com sucesso', () => {

    // 1.Acessar a página e fazer login na aplicação
    cy.visit('/login');
    cy.get('input[name="username"]').type('bruno.souza');
    cy.get('input[name="password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click(); 

    // 2.Visualizar página inicial e clicar em ($ New) para nova transação
    cy.get('[data-test="nav-top-new-transaction"]').click();

    // 3. Escolher destinatário na lista
    cy.get('[data-test="user-list-search-input"]').type('Ana Silva');
    cy.get('[data-test="user-list-item-Be3sQ-8d3"]').click();

    // 4. Preencher valor, nota descritiva e enviar dinheiro
    cy.get('[data-test="transaction-create-amount-input"]').type('1000');
    cy.get('[data-test="transaction-create-description-input"]').type('teste');
    cy.get('[data-test="transaction-create-submit-payment"]').click();

    // 6. Validar a mensagem "Transaction Submitted"
    cy.get('[data-test="alert-bar-success"]').should('contain', 'Transaction Submitted');
    
    // 7. Navegar até a aba "Mine" na página principal da conta e validar a transação no histórico
    cy.get('[data-test="sidenav-home"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test="main"]').should('contain', 'Bruno Souza paid Ana Silva');
    

  })
})
