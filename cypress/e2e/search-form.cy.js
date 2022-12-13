describe('search-form page', () => {
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
    cy.get('[placeholder="Enter City"]').should('be.visible')
    cy.get('[placeholder="Enter State"]').should('be.visible')
    cy.get('[placeholder="Zip Code (Optional)"]').should('be.visible')
    cy.get('.primary--button').contains('Search')
  })

  it('should see be able to type in input fields and have those values reflected', () => {
    cy.get('form').should('be.visible')
    cy.get('[name="city"]').type('Baltimore')
    cy.get('[name="city"]').should('have.value', 'Baltimore')
    cy.get('[name="state"]').type('MD')
    cy.get('[name="state"]').should('have.value', 'MD')
    cy.get('.zip').type('21231')
    cy.get('.zip').should('have.value', '21231')
  })
})

describe('searching for museums', () => {

  it('should navigate to page with museums when form is fille out', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      if(req.body.operationName === 'Museums') {
        req.reply({fixture: '../fixtures/museums.json'})
      }
    })
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('Denver')
    cy.get('[name="state"]').type('CO')
    cy.get('.primary--button').click()
    cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > .museum-name-card').contains('Union Station Fountains Test')
    cy.get('[href="/museums/ChIJXwSNg9R-bIcRltbMQ0joT70"] > .museums-card > .card-info > .museum-name-card').contains('Kirkland Museum of Fine & Decorative Art Test')
  })
  
  it('should show an error message when data is not retrieved', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      if(req.body.operationName === 'Museums') {
        req.reply({
          statusCode: 500,
          fixture: '../fixtures/museums.json'
        })
      }
    })
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('Denver')
    cy.get('[name="state"]').type('CO')
    cy.get('.primary--button').click()
    cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
    cy.get('.primary--button').contains('Return Home')
  })

  it('should fetch museums if there is only a city', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('Denver')
    cy.get('.primary--button').click()
    cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
  })

  it('should fetch museums if there is only a state', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="state"]').type('colorado')
    cy.get('.primary--button').click()
    cy.get('[href="/museums/ChIJ_STBjyz4aocRHBczn9CJ-uk"] > .museums-card > .card-info > .museum-name-card').contains('Wire Patch Gold Mine')
  })

  it('should return and error if there is only a zipcode', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('.zip').type('80014')
    cy.get('.primary--button').click()
    cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
    cy.get('.primary--button').contains('Return Home')
  })

  it('should fetch museums if city contains with a typo', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('enver')
    cy.get('[name="state"]').type('CO')
    cy.get('.primary--button').click()
    cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
  })

  it('should fetch museums if state contains a typo', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('denver')
    cy.get('[name="state"]').type('calorado')
    cy.get('.primary--button').click()
    cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
  })

  it('should return and error if all search fields are incorrectly typed', () => {
    cy.visit('http://localhost:3000/search-form')
    cy.get('[name="city"]').type('settle')
    cy.get('[name="state"]').type('wasningon')
    cy.get('.primary--button').click()
    cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
    cy.get('.primary--button').contains('Return Home')
  })
})

