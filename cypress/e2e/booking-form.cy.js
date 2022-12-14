describe('booking form page', () => {
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
    cy.get('.go-book-trip').click()
  })

  it('should contain a title, input field for trip title, select museum dropdown, calendar to pick date, dropdown for max number of people attending, and Book a Field Trip button', () => {
    cy.get('.book-trip').contains('Book a Field Trip')
    cy.get('[placeholder="Name your trip').should('be.visible')
    cy.get('[name="destinationPlaceId"]').should('be.visible')
    cy.get('.react-datepicker__input-container > input').should('be.visible')
    cy.get('[name="maxAttendees"]').should('be.visible')
    cy.get('.booking-button').contains('Book a Field Trip')
  })
  
  it('should be able to type in the input field and have the value reflected', () => {
    cy.get('.name-your-trip').type('My Trip 1')
    cy.get('.name-your-trip').should('have.value', 'My Trip 1')
  })

  it('should be able to select the dropdown and show a list of museums returned from search', () => {
    cy.get('[name="destinationPlaceId"]').contains('Union Station Fountains Test')
    cy.get('[name="destinationPlaceId"]')
      .select('Union Station Fountains Test')
      .invoke('val')
      .should('eq', 'ChIJocNwSiZ5bIcRRfsuPp4C400')
  })

  it('should be able to select a date and have that value reflected', () => {
    cy.get('.react-datepicker__input-container > input').click()
    cy.get('.react-datepicker__day--025').click()
    cy.get('.react-datepicker__input-container > input').should('have.value', '12/25/2022')
  })

  it('should be able to select a time and have that value reflected', () => {
    cy.get('[name="startTime"]').select('8:00am').should('have.value', '8:00am')
  })

  it('should be able to select the maximum number of people allowed on trip and have that value reflected', () => {
    cy.get('[name="maxAttendees"]').contains('Select the Max amount of People at your Event')
    cy.get('[name="maxAttendees"]').select('2')
    cy.get('[name="maxAttendees"]').should('have.value', '2')
  })

  it('should be able to fill out the form, submit the trip, and be taken to your saved trips page', () => {
    cy.get('.name-your-trip').type('My Trip 1')
    cy.get('[name="destinationPlaceId"]').select('Union Station Fountains Test')
    cy.get('.react-datepicker__input-container > input').click()
    cy.get('.react-datepicker__day--025').click()
    cy.get('[name="startTime"]').select('8:00am')
    cy.get('[name="maxAttendees"]').select('2')
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/savedTrips.json'})
    })
    cy.get('.booking-button').click()  
    cy.visit('http://localhost:3000/saved-trips')

  })

  it('should display an error message if there is an issue with booking your trip', () => {
    cy.get('.name-your-trip').type('My Trip 1')
    cy.get('[name="destinationPlaceId"]').select('Union Station Fountains Test')
    cy.get('.react-datepicker__input-container > input').click()
    cy.get('.react-datepicker__day--025').click()
    cy.get('[name="startTime"]').select('8:00am')
    cy.get('[name="maxAttendees"]').select('2')
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({
          statusCode: 500,
          fixture: '../fixtures/savedTrips.json'
        })
    })
    cy.get('.booking-button').click()
    cy.get('.page--container > h2').contains('Response not successful: Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
  })
})



