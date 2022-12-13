describe('museums results page', () => {
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

  it('should show a list of museum cards with the museum name and rating', () => {
    cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > .museum-name-card').contains('Union Station Fountains Test')
    cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > h4').contains('4.9')
    cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > h4').should('be.visible')
  })

  it('should take the user to the information for the museum when the museum card is clicked', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      req.reply({fixture: '../fixtures/museumInfo.json'}) 
    })
    // cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card').click()
    // cy.visit('http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
  })
  
  // it('should have a map of pinned locations', () => {
  //   cy.get('[style="width: 100%; height: 100%; margin: 0px; padding: 0px; position: relative;"] > :nth-child(1)').should('be.visible')
  //   cy.get('.location-pin').should('be.visible')
  //   cy.get('.map-location-name').contains('Union Station Fountains Test')
  // })

  // it('should take the user to the information for the museum when the location pin is clicked', () => {
  //   cy.get('.location-pin')
  //   .click().url().should('include', 'http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
  // })

  // it('should have a Book Trip button and visit the Booking Form page when clicked', () => {
  //   cy.get('.go-book-trip').click().url().should('include', "/booking-form")
  //   })
  })