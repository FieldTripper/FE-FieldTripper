describe('landing-page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('on page load, should see a header with a logo, and a footer with Home and About links', () => {
    cy.get('.header')
    .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d30f603c2c51e7ffdf98.png')
    .get('.footer').should('be.visible')
    .get('.home').should('be.visible')
    .get('.about').should('be.visible')
  })

  it('on page load, should see a welcome message', () => {
    cy.get('.welcome').contains('Welcome to FieldTrippers!')
  })

  it('on page load, should see a button that will take a user to the app', () => {
    cy.get('.primary--button').should('be.visible')
  })

  it('should click About and be taken to the about page', () => {
    cy.get('.about').first().click()
    .url().should('include', '/About')
  })

  it('should click the See App button and be taken to the trip-type page', () => {
    cy.get('.primary--button').first().click()
    .url().should('include', '/trip-type')
  })
})