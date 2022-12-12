import { click } from "@testing-library/user-event/dist/click"

describe('trip-type', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trip-type')
  })

  it('on page load, should have a header with a logo and a footer with Home and About Links', () => {
    cy.get('.header')
    .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d30f603c2c51e7ffdf98.png')
    .get('.footer').should('be.visible')
    .get('.home').should('be.visible')
    .get('.about').should('be.visible')
  })

  it('should have a Host A Trip button and a Join A Trip button', () => {
    cy.get('.trip-host').should('be.visible')
    .get('.trip-join').should('be.visible')
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
})