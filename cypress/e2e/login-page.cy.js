// need fixture for mutation

describe('login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/login"] > .primary--button').click()
  })

  it('should contain a title, input for email, input for password, and Login button', () => {
    cy.get('h2').contains('Login Form')
    cy.get('[placeholder="Email"]').should('be.visible')
    cy.get('[placeholder="Password"]').should('be.visible')
    cy.get('.primary--button').contains('Login')
  })

  it('should be able to type into the input fields and have the values reflected', () => {
    cy.get('[type="email"]').type('123@email.com')
    cy.get('[type="email"]').should('have.value', '123@email.com')
    cy.get('[type="password"]').type('123')
    cy.get('[type="password"]').should('have.value', '123')
  })

  it('should be able to submit login once the correct information is submitted', () => {
    cy.get('[type="email"]').type('123@email.com')
    cy.get('[type="email"]').should('have.value', '123@email.com')
    cy.get('[type="password"]').type('123')
    cy.get('[type="password"]').should('have.value', '123')
    cy.get('.primary--button').click().url().should('include', '/trip-type')
  })

  it("should show a message if the incorrect login information is submitted", () => {
    cy.get('[type="email"]').type('123email.com')
    cy.get('[type="password"]').type('123')
    cy.get('.primary--button').click()
    //test for message
  })
})