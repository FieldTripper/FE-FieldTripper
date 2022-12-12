
describe('search-form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search-form')
  })

  it('should show an error message if the trip type page is not available', () => {
    cy.visit('http://localhost:3000/search-forms')
    .get('h2').contains('404: This page does not exist. Try returning to the homepage.')
    .get('.primary--button').contains('Return Home')
  })

  it('should see a form with inputs for a city, state and zipcode', () => {
    cy.get('form').should('be.visible')
    .get('[name="city"]').type('Denver')
    .get('[name="state"]').type('CO')
    .get('.zip').should('be.visible')
    .intercept('https://be-fieldtripper.fly.dev/graphql', {
      fixture: 'museumData.json'
    }).as('museumData')
    .get('.primary--button').contains('Search').first().click()
  })

  it('it should visit the museums page after information is filled in the form', () => {
    cy.intercept('https://be-fieldtripper.fly.dev/graphql', {
      fixture: 'museum.json'
    }).as('museum')
    cy.visit('http://localhost:3000/museums')
    .get(':nth-child(1)').should('exist')
  })

  // it('should show an error message when data is not retrieved', () => {
  //   cy.get('h2').should('be.visible')
  // })
})
