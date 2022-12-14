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