describe('museums', () => {
  beforeEach(() => {
    cy.intercept('https://be-fieldtripper.fly.dev/graphql', {
      fixture: 'museum.json'
    }).as('museum')
    cy.visit('http://localhost:3000/museums')
    // cy.get('form').should('be.visible')
    //   .get('[name="city"]').type('Denver')
    //   .get('[name="state"]').type('CO')
    //   .get('.zip').should('be.visible')
    //   .get('.primary--button').contains('Search').first().click().url('eq', '/museums')
  })


  // it('should show a list of museum cards with the museum name and rating', () => {
  //   cy.get('.museums-card').should('be.visible')
  //     .get('.museums-card').should('have.length', 2)
  //     .get('.museum-name-card').contains("Union Station Fountains Test")
  //     .get('.card-info').contains('4.9')
  //     .get('.museum-image').should('exist')
  // })
  // and image

  it('should have a map of pinned locations', () => {
    cy.get(':nth-child(1)').should('exist')
  })

  //test pinned locations

  //click pinned location

  // it('should have a Book Trip button and visit the Booking Form page when clicked', () => {
  //   cy.get('.go-book-trip').first().click()
  //   // cy.intercept('https://be-fieldtripper.fly.dev/graphql', {
  //   //     fixture: 'museum.json'
  //   //   }).as('museum')
  //   .visit('http://localhost:3000/booking-form')
  //   })
  })