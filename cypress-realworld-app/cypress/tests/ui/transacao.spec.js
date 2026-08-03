describe('Feature: Transação-Enviar Dinheiro', () => {

  // Limpa os cookies e o localStorage antes dos testes para garantir isolamento
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('CT-01: Deve enviar dinheiro com sucesso quando houver saldo suficiente', () => {
    // 1. Login com o remetente (Bruno Souza) que possui saldo suficiente
    cy.get('[data-test="signin-username"]').type('bruno.souza');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();

    // 2. Navegar para a tela de nova transação
    cy.get('[data-test="nav-top-new-transaction"]').click();

    // 3. Buscar e selecionar o destinatário (Bruno Souza)
    cy.get('[data-test="user-list-search-input"]').type('Raphael Coelho');
    cy.get('[data-test="users-list"]').contains('Raphael Coelho').click();

    // 4. Preencher valor e descrição da transferência
    cy.get('[data-test="transaction-create-amount-input"]').type('1000');
    cy.get('[data-test="transaction-create-description-input"]').type('Pagamento capa');

    // 5. Confirmar o pagamento
    cy.get('[data-test="transaction-create-submit-payment"]').click();

    // 6.Resultado Esperado: Confirmação de envio foi exibida na tela
    cy.contains('Transaction Submitted').should('be.visible');

    // 7.- Valida que o botão para criar outra transação ou ir para o feed está disponível
    cy.get('[data-test="new-transaction-create-another-transaction"]').should('be.visible');
  });

  
 // it('CT-02: Deve exibir mensagem de erro ao tentar enviar dinheiro com saldo insuficiente', () => {
    // 1. Login com usuário sem saldo suficiente (Ana Silva)
 //   cy.get('[data-test="signin-username"]').type('bruno.souza');
 //   cy.get('[data-test="signin-password"]').type('123456');
 //   cy.get('[data-test="signin-submit"]').click();;
    
    // 2. Navegar para a tela de nova transação
//    cy.get('[data-test="nav-top-new-transaction"]').click();

    // 3. Selecionar o destinatário (Diego Alves)
  //  cy.get('[data-test="user-list-search-input"]').type('Raphael Coelho');
   // cy.get('[data-test^="user-option-"]').contains('Raphael Coelho').click();

    // 4. Preencher um valor superior ao saldo em conta ($500.00)
   // cy.get('#amount').type('2000');
    //cy.get('#transaction-create-description-input').type('Aluguel');

    // 5. Tentar submeter a transação
   // cy.get('[data-test="transaction-create-submit-payment"]').click();

    // 6. Resultado Esperado: O sistema impediu o envio exibindo mensagem de erro
   // cy.get('[data-test="alert-bar"]').should('be.visible').and('contain', '');
  });

