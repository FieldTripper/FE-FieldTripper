describe('saved trips page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/savedTrips.json'})
    })
    cy.visit('http://localhost:3000/saved-trips')
  })

  it('should show all of the users saved trips upon page load', () => {
    
  })
})