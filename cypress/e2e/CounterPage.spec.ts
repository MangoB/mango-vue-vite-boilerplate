context('UI', () => {
  beforeEach(() => {
    cy.visit('/counter')
  })

  it('Should render CounterView', () => {
    cy.url()
      .should('eq', 'http://localhost:5173/counter')
  })

  it('Should display home page correctly', () => {
    cy.get('p')
      .should('contain', 'Counter')
      .and('contain', 'Increase by one')

    cy.get('[data-test="count-number"]')
      .should('contain', 0)

    for (let i = 1; i <= 3; i++) {
      cy.get('[data-test="btn-increment"]')
        .click()

      cy.get('[data-test="count-number"]')
        .should('contain', i)
    }

    cy.get('[data-test="count-number"]')
      .should('contain', '3')

    cy.get('[data-test="btn-reset"]')
      .click()

    cy.get('[data-test="count-number"]')
      .should('contain', '0')
  })
})
