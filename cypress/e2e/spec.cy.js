/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    ;
  })
});

it('teste novo', function() {
  cy.visit('http://127.0.0.1:8080')
  cy.get('#signup-firstname').type('Fabio');
  cy.get('#signup-lastname').type('Araujo');
  cy.get('#signup-email').type('Fabio3@testes.com');
  cy.get('#signup-phone').type('11950493020');
  cy.get('#signup-password').type('Teste&2020');
  cy.get('#signup-button').click();
  cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!');

  
});

