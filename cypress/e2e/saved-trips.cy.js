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
    cy.get(':nth-child(2) > .saved-destination').contains('Museum of Hades')
    cy.get(':nth-child(2) > .saved-trip-info').should('be.visible')
    cy.get(':nth-child(2) > .saved-trip-info > .break1').contains('Your trip on:')
    cy.get(':nth-child(2) > .saved-trip-info > span').contains('December 11, 2022')
    cy.get(':nth-child(2) > .saved-trip-info > :nth-child(4)').contains('starts at')
    cy.get(':nth-child(2) > .saved-trip-info > .break2').contains('9:58PM')
    cy.get(':nth-child(2) > .attendance').contains('5 out of 10 people are attending')
    cy.get(':nth-child(2) > .primary--button').contains('Delete Trip')
  })

  it('should remove the trip when the Delete Trip button is clicked', () => {
    cy.get(':nth-child(2) > .primary--button').click()
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
      if(req.body.operationName === 'DeleteUserTrip' || 'UserTrips') {
        req.reply({fixture: '../fixtures/savedTripsMutation.json'})
      }
    })
    cy.visit('http://localhost:3000/saved-trips')
  })
})

describe('saved trips error handling', () => {
  it('should show a message if there are no saved trips', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/noSavedTrips.json'})
    })
    cy.visit('http://localhost:3000/saved-trips')
    cy.get('.saved-trip-container > p').contains(`You don't have any trips planned, yet. Why not try hosting or joining a trip?`)
  })

  it('should show a message if there is an 500 error fetching the saved trips', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({
          statusCode: 500,
          fixture: '../fixtures/savedTrips.json'
        })
    })
    cy.visit('http://localhost:3000/saved-trips')
    cy.get('.page--container > h2').contains('Response not successful: Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
  })

  it('should show a message if there is an error fetching the saved trips', () => {
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({
          forceNetworkError: true,
          fixture: '../fixtures/savedTrips.json'
        })
    })
    cy.visit('http://localhost:3000/saved-trips')
    cy.get('.page--container > h2').contains('Failed to fetch We were not able to retrieve data for you. Try returning to the homepage')
  })
})