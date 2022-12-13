describe ('existing trips page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      req.reply({fixture: '../fixtures/existingTrips.json'})
    })
    cy.visit('http://localhost:3000/existing-trips')
  })
    
// Currently do not know how to grab the jsx tag. When selected "cy.get('#\31  > h3')" an error 'The only valid numeric escape in strict mode is '\0'' occurs
// It appears to do something with octal literals and working in strict mode

    it('should show already existing trips on page load', () => {
      cy.get('.join-trip').contains('Join A Trip')
    })

    it('should have a Join button and a Delete button', () => {
      
    })
})