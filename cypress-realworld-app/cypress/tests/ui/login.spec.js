describe('Login Success', () => {
  it('Deve realizar login com usuário válido', () => {
    cy.visit('/signin');

    cy.get('[data-test="signin-username"]').should('be.visible').type('Katharina_Bernier');
    cy.get('[data-test="signin-password"]').should('be.visible').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
  });
});


describe('Login com credenciais inválidas', () => {
  it('Deve retornar erro ao tentar realizar login com usuário inválido', () => {
    cy.visit('/signin');

    cy.get('[data-test="signin-username"]').should('be.visible').type('Raphael');
    cy.get('[data-test="signin-password"]').should('be.visible').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
  });

  it('Deve retornar erro ao tentar realizar login com senha inválida', () => {
    cy.visit('/signin');

    cy.get('[data-test="signin-username"]').should('be.visible').type('Katharina_Bernier');
    cy.get('[data-test="signin-password"]').should('be.visible').type('123456');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
  });

  it('Deve retornar erro ao tentar realizar login com usuário e senha inválidos', () => {
    cy.visit('/signin');

    cy.get('[data-test="signin-username"]').should('be.visible').type('Raphael');
    cy.get('[data-test="signin-password"]').should('be.visible').type('123456');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid');
  });
});
