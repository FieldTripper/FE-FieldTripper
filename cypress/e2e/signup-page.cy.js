// needs fixture for mutation

describe('sign up form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/sign-up"] > .primary--button').click()
  })

  it('should contain a title and inputs for: name, email, password, password confirmation, and a Sign Up button', () => {
    cy.get('h2').contains('Sign Up Form')
    cy.get('[placeholder="Enter your name"]').should('be.visible')
    cy.get('[placeholder="Enter your email"]').should('be.visible')
    cy.get('[placeholder="Choose a password"]').should('be.visible')
    cy.get('[placeholder="Confirm password"]').should('be.visible')
    cy.get('.primary--button').contains('Sign Up')
  })

  it("should be able to type in the inputs and have the value relfected on the page", () => {
    cy.get('[type="text"]').type('Joe')
    cy.get('[type="text"]').should('have.value', 'Joe')
    cy.get('[type="email"]').type('123@email.com')
    cy.get('[type="email"]').should('have.value', '123@email.com')
    cy.get('[name="password"]').type('123')
    cy.get('[name="password"]').should('have.value', '123')
    cy.get('[name="passwordConfirmation"]').type('123')
    cy.get('[name="passwordConfirmation"]').should('have.value', '123')
  })

  // needs error handling for this
  it('should not be able to submit the signup unless all fields are completed correctly', () => {
    // cy.get('[type="text"]').type('Joe')
  })

  it('should take the user to the trip type page upon successful completion', () => {

  })
})