describe('trip-type page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trip-type')
  })

  it('on page load, should have a header with a logo and a footer with Home and About Links', () => {
    cy.get('.header').should('be.visible')
    cy.get('.choose-trip').contains('Choose Your Trip Type')
    .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d30f603c2c51e7ffdf98.png')
    .get('.footer').should('be.visible')
    .get('.home').should('be.visible')
    .get('.about').should('be.visible')
  })

  it('should have a Host A Trip button, Join A Trip button, and Your Saved Trips button', () => {
    cy.get('.trip-host').contains('Host A Trip')
    cy.get('.trip-join').contains('Join A Trip')
    cy.get('.trip-saved').contains('Your Saved Trips')
  })

  it('should show an error message if the trip type page is not available', () => {
    cy.visit('http://localhost:3000/trip-types')
    .get('h2').contains('404: This page does not exist. Try returning to the homepage.')
    .get('.primary--button').contains('Return Home')
  })

  it('should visit a the search form page if you click Host A Trip', () => {
    cy.get('.trip-host').first().click()
    .url().should('include', '/search-form')
  })

  it('should visit the existing trips page if you click Join A Trip', () => {
    cy.get('.trip-join').first().click()
    .url().should('include', '/existing-trips')
  })

  it('should visit the users saved trips page when Your Saved Trips is clicked', () => {
    cy.get('.trip-saved').click().url().should('include', '/saved-trips')
  })
 
  it('should take the user back to the landing page when the Home nav link is clicked', () => {
    cy.get('.home').click().url().should('include', '/')
  })
})