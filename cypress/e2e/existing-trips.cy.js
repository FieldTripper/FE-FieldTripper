describe ('existing trips page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      req.reply({fixture: '../fixtures/existingTrips.json'})
    })
    cy.visit('http://localhost:3000/existing-trips')
  })
    
    it('should show already existing trips on page load', () => {
      cy.get('.join-trip').contains('Join A Trip')
    })

    it('should have a Join button and a Delete button', () => {
      
    })
})