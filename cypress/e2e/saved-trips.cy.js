describe('saved trips page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/savedTrips.json'})
    })
    cy.visit('http://localhost:3000/saved-trips')
  })

  it('should show all of the users saved trips upon page load', () => {
    cy.get('.page-title').contains('Your Saved Field Trips')
    cy.get(':nth-child(2) > .trip-name').contains('Trip 3')
    cy.get(':nth-child(3) > .trip-name').contains('Trip 9')
    cy.get(':nth-child(4) > .trip-name').contains('My Trip 1')
  })

  it('should have the trip name, museum name, trip date, number of people attending, and Delete Trip button on the cards', () => {
    cy.get(':nth-child(2) > .trip-name').contains('Trip 3')
    cy.get(':nth-child(2) > .saved-trip-info').contains('Your trip on: December 12, 2022 starts at undefined')
    cy.get(':nth-child(2) > .attendance').contains('5 out of 10 people are attending')
    cy.get(':nth-child(2) > .delete-button').contains('Delete Trip')
  })

  // Needs to be tested
  it('should remove the trip when the Delete Trip button is clicked', () => {
    cy.get(':nth-child(2) > .delete-button').click()
  })
})