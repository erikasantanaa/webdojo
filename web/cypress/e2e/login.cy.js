describe('Deve logar com sucesso', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()
    
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })
})

describe('Não deve logar com senha inválida', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana321')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})

describe('Não deve logar com email não cadastrado', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('404@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})