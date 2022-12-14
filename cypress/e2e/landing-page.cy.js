describe('landing-page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('on page load, should see a header with a logo, and a footer with Home and About links', () => {
    cy.get('.header')
      .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d30f603c2c51e7ffdf98.png')
      .get('.footer').should('be.visible')
      .get('.home').should('be.visible')
      .get('.footer-saved-trips').should('be.visible')
      .get('.footer-join-a-trip').should('be.visible')
      .get('.footer-host-a-trip').should('be.visible')
      .get('.footer-about').should('be.visible')
  })

  // Add username to welcome message
  it('on page load, should see a welcome message with the users name', () => {
    cy.get('.welcome').contains('Welcome to FieldTrippers!')
  })

  it('should have a button for Login, Sign Up, and See App', () => {
    cy.get('.primary--button').contains('See App')
      .get('[href="/login"] > .primary--button').contains('Login')
      .get('[href="/sign-up"] > .primary--button').contains('Sign Up')
  })

  it('should click About and be taken to the about page', () => {
    cy.get('.footer-about').first().click()
      .url().should('include', '/About')
  })

  it('should click the See App button and be taken to the trip-type page', () => {
    cy.get('.primary--button').first().click()
      .url().should('include', '/trip-type')
  })

  it('should click the Login button and be taken to the login page', () => {
    cy.get('[href="/login"] > .primary--button').click().url().should('include', '/login')
  })

  it('should click the Sign Up button and be taken to the sign up page', () => {
    cy.get('[href="/sign-up"] > .primary--button').click().url().should('include', "/sign-up")
  })
})