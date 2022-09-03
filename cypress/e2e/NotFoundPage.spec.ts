context('UI', () => {
  const randomPathName = (Math.random() + 1).toString(36).substring(7)
  beforeEach(() => {
    cy.visit(`/${randomPathName}`)
  })

  it('Should render NotFoundView', () => {
    cy.url()
      .should('eq', `http://localhost:5173/${randomPathName}`)
  })

  it('Should display 404 not found page correctly', () => {
    cy.get('div')
      .should('contain', '404 NotFound')
      .and('contain', 'The link is broken or the page has been moved')
      .and('contains', /(^See )((<.+>))( README.md )((<\/a>))( for more information.$)/)
  })

  it('Should redirect to the home page by button correctly', () => {
    cy.get('[data-test="btn-go-home-page"]')
      .click()

    cy.url()
      .should('eq', 'http://localhost:5173/')
  })
})
