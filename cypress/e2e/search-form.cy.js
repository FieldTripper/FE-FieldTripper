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
    beforeEach(() => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        if(req.body.operationName === 'Museums') {
          req.reply({fixture: '../fixtures/museums.json'})
        }
      })
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('Denver')
      cy.get('[name="state"]').type('CO')
      cy.get('.primary--button').click()
    })

    it('should see a form with inputs for a city, state and zipcode', () => {
    
    
    })
  })


 
  //it should show fetching of info for poorly typed query

  // it should show testing for completely wrong typed queries

  // it('should show an error message when data is not retrieved', () => {
  //   cy.get('h2').should('be.visible')
  // })
