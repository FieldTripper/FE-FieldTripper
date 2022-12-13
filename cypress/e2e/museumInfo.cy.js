describe('museum information page', () => {
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
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      req.reply({fixture: '../fixtures/museumInfo.json'})
    })
    cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card').click()
    cy.visit('http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
  })

  it('should show museum information including a name, address, image, rating, total ratings, wheelchair accessibility, and hours', () => {
    cy.get('h1').contains('Union Station Fountains Test')
    .get('.address').contains('Unnamed Road, Denver, CO 80202, USA')
    .get('.museum-info-container > a').contains('http://www.kirklandmuseum.org/')
    .get('.museum-image-info').should('be.visible')
    .get(':nth-child(6)').contains('Rating: 4.9/5')
    .get(':nth-child(7)').contains('Total Ratings: 15')
    .get('.museum-info-container > :nth-child(8)').contains('Price: $')
    .get(':nth-child(9)').contains('Wheelchair Accessible: Yes')
    .get(':nth-child(10)').contains('Hours')
    .get(':nth-child(11) > :nth-child(1)').contains('Open 24 hours')
  })

  // it('should have a Book Trip button and when clicked should take the user to the booking form page', () => {
  //   cy.get('.go-book-trip').contains('Book Trip')
  //   cy.get('.go-book-trip').click() .url().should('include', '/booking-form')
  // })
})