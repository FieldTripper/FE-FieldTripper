// needs fixture for mutation

describe('sign up form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/sign-up"] > .primary--button').click()
  })

  // it('should contain a title and inputs for: name, email, password, password confirmation, and a Sign Up button', () => {
  //   cy.get('h2').contains('Sign Up Form')
  //   cy.get('[placeholder="Enter your name"]').should('be.visible')
  //   cy.get('[placeholder="Enter your email"]').should('be.visible')
  //   cy.get('[placeholder="Choose a password"]').should('be.visible')
  //   cy.get('[placeholder="Confirm password"]').should('be.visible')
  //   cy.get('.sign-up-button').contains('Sign Up')
  // })

  // it("should be able to type in the inputs and have the value reflected on the page", () => {
  //   cy.get('[type="text"]').type('Joe')
  //   cy.get('[type="text"]').should('have.value', 'Joe')
  //   cy.get('[type="email"]').type('123@email.com')
  //   cy.get('[type="email"]').should('have.value', '123@email.com')
  //   cy.get('[name="password"]').type('123')
  //   cy.get('[name="password"]').should('have.value', '123')
  //   cy.get('[name="passwordConfirmation"]').type('123')
  //   cy.get('[name="passwordConfirmation"]').should('have.value', '123')
  // })

  // it('should return a message if all the fields are not filled out', () => {
  //   cy.get('[type="text"]').type('Joe')
    // cy.get('.sign-up-button').click()
  //   cy.get('.warning-message').contains('Please fill out all fields')
  // })

  // it('should not be able to submit the signup unless all fields are completed correctly', () => {
  //   cy.get('[type="text"]').type('Joe')
  //   cy.get('[type="email"]').type('123@email.com')
  //   cy.get('[name="password"]').type('124')
  //   cy.get('[name="passwordConfirmation"]').type('123')
  //   cy.get('.sign-up-button').click()
  //   cy.get('.warning-message').contains('Sorry, we were not able to sign you up. Please make sure both passwords are typed correctly and try again.')
  // })

  it('should take the user to the trip type page upon successful completion', () => {
    cy.get('[type="text"]').type('Joee')
    cy.get('[type="email"]').type('12345@email.com')
    cy.get('[name="password"]').type('124')
    cy.get('[name="passwordConfirmation"]').type('124')
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      if(req.body.operationName === 'CreateUser') {
        req.reply({fixture: '../fixtures/createUserMutation.json'})
      }
    })
    cy.get('.sign-up-button').click()

    // .url().should('include', '/trip-type')
  })
})