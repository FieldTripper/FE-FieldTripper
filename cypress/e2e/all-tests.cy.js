describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/About"] > .footer-about').click()
  })

  it('should show an About title and a description', () => {
    cy.get('.about-by').should('be.visible')
  })

  it('should show a title with the names and links(linkedIn, GitHub) of everyone who worked on the project', () => {
    cy.get('h4').contains('CREATED BY')
    .get('.link-logo').should('be.visible')
    .get('.creators > :nth-child(1)').contains('Mary Ballantyne')
    .get('.creators > :nth-child(2)').contains('Carissa Gross')
    .get('.creators > :nth-child(3)').contains('Andrew Knapick')
    .get('.creators > :nth-child(4)').contains('Dinne Kopelevich')
    .get('.creators > :nth-child(5)').contains('A.J. Krumholz')
    .get('.creators > :nth-child(6)').contains('Andrew Mullins')
    .get('.creators > :nth-child(7)').contains('Matthew Press')
  })
})

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
    cy.visit('http://localhost:3000/saved-trips').url().should('include', '/saved-trips')
  })

  it('should display an error message if there is an issue with booking your trip', () => {
    cy.get('.name-your-trip').type('My Trip 1')
    cy.get('[name="destinationPlaceId"]').select('Union Station Fountains Test')
    cy.get('.react-datepicker__input-container > input').click()
    cy.get('.react-datepicker__day--025').click()
    cy.get('[name="startTime"]').select('8:00am')
    cy.get('[name="maxAttendees"]').select('2')
    cy.get('.booking-button').click()
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({
          statusCode: 500,
          fixture: '../fixtures/savedTrips.json'
        })
    })
    cy.visit('http://localhost:3000/saved-trips')
    cy.get('.page--container > h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
  })

  it('should display an error message if there is an issue with booking your trip', () => {
    cy.get('.name-your-trip').type('My Trip 1')
    cy.get('[name="destinationPlaceId"]').select('Union Station Fountains Test')
    cy.get('.react-datepicker__input-container > input').click()
    cy.get('.react-datepicker__day--025').click()
    cy.get('[name="startTime"]').select('8:00am')
    cy.get('[name="maxAttendees"]').select('2')
    cy.get('.booking-button').click()
    cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({
          forceNetworkError: true,
          fixture: '../fixtures/savedTrips.json'
        })
    })
    cy.visit('http://localhost:3000/saved-trips')
    cy.get('.page--container > h2').contains('Failed to fetch We were not able to retrieve data for you. Try returning to the homepage.')
  })
})

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
  
  describe('landing-page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('on page load, should see a header with a logo, and a footer with Home and About links', () => {
      cy.get('.header')
        .get('.logo').should('have.attr', 'src').should('include', '/static/media/logo.593f0f29cc596a374ea9.png')
        .get('.footer').should('be.visible')
        .get('.footer-about').should('be.visible')
    })
  
    it('on page load, should see a welcome message', () => {
      cy.get('.welcome').contains('Welcome to FieldTrippers!')
    })
  
    it('should have a button for Login, Sign Up, and See App', () => {
      cy.get('.primary--button').contains('See App')
        .get('[href="/login"] > .primary--button').contains('Login')
        .get('[href="/sign-up"] > .primary--button').contains('Sign Up')
    })
  
    it('should click About and be taken to the about page', () => {
      cy.get('.footer-about').first().click()
        .url().should('include', '/About')
    })
  
    it('should click the See App button and be taken to the trip-type page', () => {
      cy.get('.primary--button').first().click()
        .url().should('include', '/trip-type')
    })
  
    it('should click the Login button and be taken to the login page', () => {
      cy.get('[href="/login"] > .primary--button').click().url().should('include', '/login')
    })
  
    it('should click the Sign Up button and be taken to the sign up page', () => {
      cy.get('[href="/sign-up"] > .primary--button').click().url().should('include', "/sign-up")
    })
  })

  describe('login page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
        .get('[href="/login"] > .primary--button').click()
    })
  
    it('should contain a title, input for email, input for password, and Login button', () => {
      cy.get('h2').contains('Login Form')
        .get('[placeholder="Email"]').should('be.visible')
        .get('[placeholder="Password"]').should('be.visible')
        .get('.primary--button').contains('Login')
    })
  
    it('should be able to type into the input fields and have the values reflected', () => {
      cy.get('[type="email"]').type('123@email.com')
        .get('[type="email"]').should('have.value', '123@email.com')
        .get('[type="password"]').type('123')
        .get('[type="password"]').should('have.value', '123')
    })
  
    it('should be able to submit login once the correct information is submitted', () => {
      cy.get('[type="email"]').type('123@email.com')
        .get('[type="email"]').should('have.value', '123@email.com')
        .get('[type="password"]').type('123')
        .get('[type="password"]').should('have.value', '123')
        .get('.primary--button').click().url().should('include', '/trip-type')
    })
  
    it("should show a message if the incorrect login information is submitted", () => {
      cy.get('[type="email"]').type('123demail@dfgsdf.com')
        .get('[type="password"]').type('123')
        .get('.primary--button').click()
        cy.get('.warning-message').contains('Sorry, the information you provided does not seem to match any user in our system.')
    })
  
    it('should return a message if all fields are not filled out', () => {
      cy.get('[type="email"]').type('123demail@dfgsdf.com')
      .get('.primary--button').click()
      cy.get('.warning-message').contains('Please fill in all fields')
    })
  
    it('should take the user to the trip types page upon successful log in', () => {
      cy.get('[type="email"]').type('123@email.com')
        .get('[type="password"]').type('123')
        .get('.primary--button').click()
        .url().should('include', '/trip-type')
    })
  
    it('should be taken back to the landing page when the sign out button is clicked', () => {
      cy.get('[type="email"]').type('123@email.com')
        .get('[type="password"]').type('123')
        .get('.primary--button').click()
        cy.get('.sign-out--button').click()
        .url().should('include', '/')
    })
  })

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
  
    it('should have a Book Trip button and when clicked should take the user to the booking form page', () => {
      cy.get('.go-book-trip').contains('Book Trip')
      cy.get('.go-book-trip').click() .url().should('include', '/booking-form')
    })
  })
  
  describe('museums results page', () => {
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
    })
  
    it('should show a list of museum cards with the museum name and rating', () => {
      cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > .museum-name-card').contains('Union Station Fountains Test')
      cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > h4').contains('4.9')
      cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > h4').should('be.visible')
    })
  
    it('should take the user to the information for the museum when the museum card is clicked', () => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/museumInfo.json'}) 
      })
      cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card').click()
      cy.visit('http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
      cy.get('h1').contains('Union Station Fountains Test')
    })
    
    it('should have a map of pinned locations', () => {
      cy.get('[style="width: 100%; height: 100%; margin: 0px; padding: 0px; position: relative;"] > :nth-child(1)').should('be.visible')
      cy.get('.location-pin').should('be.visible')
      cy.get('.map-location-name').contains('Union Station Fountains Test')
    })
  
    it('should take the user to the information for the museum when the location pin is clicked', () => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        req.reply({fixture: '../fixtures/museumInfo.json'}) 
      })
      cy.get('[style="width: 0px; height: 0px; left: -74.6599px; top: -30.8387px; background-color: transparent; position: absolute;"] > .location-box > a > .location-pin').click()
      cy.visit('http://localhost:3000/museums/ChIJocNwSiZ5bIcRRfsuPp4C400')
      cy.get('h1').contains('Union Station Fountains Test')
    })
  
    it('should have a Book Trip button and visit the Booking Form page when clicked', () => {
      cy.get('.go-book-trip').click().url().should('include', "/booking-form")
      })
    })
  
  describe('museums results page errors', () => {
    it('should show error message if there is an issue fetching the data', () => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
          req.reply({
            statusCode: 500,
            fixture: '../fixtures/museums.json'
          })
        })
        cy.visit('http://localhost:3000/search-form')
        cy.get('[name="city"]').type('Denver')
        cy.get('[name="state"]').type('CO')
        cy.get('.primary--button').click()
        cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
        cy.get('.primary--button').contains('Return Home')
    })
  })
  
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
      cy.get(':nth-child(2) > .saved-trip-info > span').contains('December 14, 2022')
      cy.get(':nth-child(2) > .saved-trip-info > :nth-child(4)').contains('starts at')
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

  describe('search-form page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/search-form')
    })
  
    it('should show an error message if the trip type page is not available', () => {
      cy.visit('http://localhost:3000/search-forms')
      .get('h2').contains('404: This page does not exist. Try returning to the homepage.')
      .get('.primary--button').contains('Return Home')
    })
  
    it('should see a form with inputs for a city, state and zipcode', () => {
      cy.get('form').should('be.visible')
      cy.get('[placeholder="Enter City"]').should('be.visible')
      cy.get('[placeholder="Enter State"]').should('be.visible')
      cy.get('[placeholder="Zip Code (Optional)"]').should('be.visible')
      cy.get('.primary--button').contains('Search')
    })
  
    it('should see be able to type in input fields and have those values reflected', () => {
      cy.get('form').should('be.visible')
      cy.get('[name="city"]').type('Baltimore')
      cy.get('[name="city"]').should('have.value', 'Baltimore')
      cy.get('[name="state"]').type('MD')
      cy.get('[name="state"]').should('have.value', 'MD')
      cy.get('.zip').type('21231')
      cy.get('.zip').should('have.value', '21231')
    })
  })
  
  describe('searching for museums', () => {
  
    it('should navigate to page with museums when form is filled out', () => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        if(req.body.operationName === 'Museums') {
          req.reply({fixture: '../fixtures/museums.json'})
        }
      })
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('Denver')
      cy.get('[name="state"]').type('CO')
      cy.get('.primary--button').click()
      cy.get('[href="/museums/ChIJocNwSiZ5bIcRRfsuPp4C400"] > .museums-card > .card-info > .museum-name-card').contains('Union Station Fountains Test')
      cy.get('[href="/museums/ChIJXwSNg9R-bIcRltbMQ0joT70"] > .museums-card > .card-info > .museum-name-card').contains('Kirkland Museum of Fine & Decorative Art Test')
    })
    
    it('should show an error message when data is not retrieved', () => {
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        if(req.body.operationName === 'Museums') {
          req.reply({
            statusCode: 500,
            fixture: '../fixtures/museums.json'
          })
        }
      })
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('Denver')
      cy.get('[name="state"]').type('CO')
      cy.get('.primary--button').click()
      cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
      cy.get('.primary--button').contains('Return Home')
    })
  
    it('should fetch museums if there is only a city', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('Denver')
      cy.get('.primary--button').click()
      cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
    })
  
    it('should fetch museums if there is only a state', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="state"]').type('colorado')
      cy.get('.primary--button').click()
      cy.get('[href="/museums/ChIJ_STBjyz4aocRHBczn9CJ-uk"] > .museums-card > .card-info > .museum-name-card').contains('Wire Patch Gold Mine')
    })
  
    it('should fetch museums if there is only a zipcode', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('.zip').type('80014')
      cy.get('.primary--button').click()
      cy.get('.museum-name-card').contains('Melvin Schoolhouse Museum & Library')
    })
  
    it('should fetch museums if city contains with a typo', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('enver')
      cy.get('[name="state"]').type('CO')
      cy.get('.primary--button').click()
      cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
    })
  
    it('should fetch museums if state contains a typo', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('denver')
      cy.get('[name="state"]').type('calorado')
      cy.get('.primary--button').click()
      cy.get('[href="/museums/ChIJb13H9tx4bIcRPQoWtgSMyKk"] > .museums-card > .card-info > .museum-name-card').contains('National Ballpark Museum')
    })
  
    it('should return and error if all search fields are incorrectly typed', () => {
      cy.visit('http://localhost:3000/search-form')
      cy.get('[name="city"]').type('settle')
      cy.get('[name="state"]').type('wasningon')
      cy.get('.primary--button').click()
      cy.get('h2').contains('Received status code 500 We were not able to retrieve data for you. Try returning to the homepage.')
      cy.get('.primary--button').contains('Return Home')
    })
  })
  
  describe('sign up form page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.get('[href="/sign-up"] > .primary--button').click()
    })
  
    it('should contain a title and inputs for: name, email, password, password confirmation, and a Sign Up button', () => {
      cy.get('h2').contains('Sign Up Form')
      cy.get('[placeholder="Enter your name"]').should('be.visible')
      cy.get('[placeholder="Enter your email"]').should('be.visible')
      cy.get('[placeholder="Choose a password"]').should('be.visible')
      cy.get('[placeholder="Confirm password"]').should('be.visible')
      cy.get('.sign-up-button').contains('Sign Up')
    })
  
    it("should be able to type in the inputs and have the value reflected on the page", () => {
      cy.get('[type="text"]').type('Joe')
      cy.get('[type="text"]').should('have.value', 'Joe')
      cy.get('[type="email"]').type('123@email.com')
      cy.get('[type="email"]').should('have.value', '123@email.com')
      cy.get('[name="password"]').type('123')
      cy.get('[name="password"]').should('have.value', '123')
      cy.get('[name="passwordConfirmation"]').type('123')
      cy.get('[name="passwordConfirmation"]').should('have.value', '123')
    })
  
    it('should return a message if all the fields are not filled out', () => {
      cy.get('[type="text"]').type('Joe')
      cy.get('.sign-up-button').click()
      cy.get('.warning-message').contains('Please fill in all fields')
    })
  
    it('should not be able to submit the signup unless all fields are completed correctly', () => {
      cy.get('[type="text"]').type('Joe')
      cy.get('[type="email"]').type('123@email.com')
      cy.get('[name="password"]').type('124')
      cy.get('[name="passwordConfirmation"]').type('123')
      cy.get('.sign-up-button').click()
      cy.get('.warning-message').contains('Sorry, we were not able to sign you up. Please make sure both passwords are typed correctly and try again.')
    })
  
    it('should take the user to the trip type page upon successful completion', () => {
      cy.get('[type="text"]').type('Joe')
      cy.get('[type="email"]').type('123@email.com')
      cy.get('[name="password"]').type('124')
      cy.get('[name="passwordConfirmation"]').type('124')
      cy.intercept('POST', 'https://be-fieldtripper.fly.dev/graphql', (req) => {
        if(req.body.operationName === 'CreateUser') {
          req.reply({fixture: '../fixtures/createUserMutation.json'})
        }
      })
      .visit('http://localhost:3000/trip-type')
      .url().should('include', '/trip-type')
    })
  })
  
  describe('trip-type page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/trip-type')
    })
  
    it('on page load, should have a header with a footer and an About link', () => {
      cy.get('.header').should('be.visible')
      cy.get('.choose-trip').contains('Choose Your Trip Type')
      .get('.footer').should('be.visible')
      .get('.footer-about').should('be.visible').contains('ABOUT')
    })
  
    it('should have a Host A Trip button, Join A Trip button, and Your Saved Trips button', () => {
      cy.get('.trip-host').contains('Host A Trip')
      cy.get('.trip-join').contains('Join A Trip')
      cy.get('.trip-saved').contains('Your Saved Trips')
    })
  
    it('should show an error message if the trip type page is not available', () => {
      cy.visit('http://localhost:3000/trip-types')
      .get('h2').contains('404: This page does not exist. Try returning to the homepage.')
      .get('.primary--button').contains('Return Home')
    })
  
    it('should visit a the search form page if you click Host A Trip', () => {
      cy.get('.trip-host').first().click()
      .url().should('include', '/search-form')
    })
  
    it('should visit the existing trips page if you click Join A Trip', () => {
      cy.get('.trip-join').first().click()
      .url().should('include', '/existing-trips')
    })
  
    it('should visit the users saved trips page when Your Saved Trips is clicked', () => {
      cy.get('.trip-saved').click().url().should('include', '/saved-trips')
    })
   
    it('should take the user back to the landing page is the application icon is clicked', () => {
      cy.get('.logo').click().url().should('include', '/')
    })
  })