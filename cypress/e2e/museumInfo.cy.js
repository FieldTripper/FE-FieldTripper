describe('museumInfo', () => {
  beforeEach(() => {
    cy.intercept('https://be-fieldtripper.fly.dev/graphql', {
      fixture: 'museumInfo.json'
    }).as('museumInfo')
    cy.visit('http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
  })

  it('should show museum information including a name, address, image, rating, total ratings, wheelchair accessibility, and hours', () => {
    cy.get('h1').contains('Union Station Fountains Test')
    .get('.address').contains('Unnamed Road, Denver, CO 80202, USA')
    .get('.museum-image-info').should('exist')
    .get(':nth-child(5)').contains('Rating: 4.9/5')
    .get(':nth-child(6)').contains('Total Ratings: 15')
    .get(':nth-child(7)').contains('Wheelchair Accessible: Yes')
    .get(':nth-child(8)').contains('Hours')
  })

  // it('should show a message if no additional details are availble
})