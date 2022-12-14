describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.about').click()
  })

  it('should show a title with the names and links(linkedIn, GitHub) of everyone who worked on the project', () => {
    cy.get('.created-by > b').contains('CREATED BY')
    cy.get('.creators > :nth-child(1)').contains('Mary Ballantyne')
    cy.get('.creators > :nth-child(3)').contains('Carissa Gross')
    cy.get('.creators > :nth-child(7)').contains('Andrew Knapick')
    cy.get('.creators > :nth-child(11)').contains('Dinne Kopelevich')
    cy.get('.creators > :nth-child(15)').contains('A.J. Krumholz')
    cy.get('.creators > :nth-child(19)').contains('Andrew Mullins')
    cy.get('.creators > :nth-child(23)').contains('Matthew Press')
  })

  //add tests for links to gitHub and LinkedIn for each member
})