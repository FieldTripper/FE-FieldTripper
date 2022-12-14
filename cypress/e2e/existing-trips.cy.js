describe ('existing trips page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      req.reply({fixture: '../fixtures/existingTrips.json'})
    })
    cy.visit('http://localhost:3000/existing-trips')
  })
    
    it('should show already existing trips on page load', () => {
      cy.get('.join-trip').contains('Join A Trip')
      cy.get('#\\31  > h3').contains('Trip 1')
      cy.get('#\\31  > :nth-child(2)').contains('Museum of Hades')
      cy.get('#\\31  > button').contains('Join')
    })

    it('should be able to join a trip', () => {
      cy.get('#\\31  > button').click()
      cy.visit('http://localhost:3000/saved-trips')
      cy.get(':nth-child(2) > .trip-name').contains('Trip 1')
    })
  })
  