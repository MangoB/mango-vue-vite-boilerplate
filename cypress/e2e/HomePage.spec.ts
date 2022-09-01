context('UI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should render HomeView', () => {
    cy.url()
      .should('eq', 'http://localhost:5173/')
  })

  it('Should display home page correctly', () => {
    cy.get('p')
      .should('contain', 'Welcome to MangoB Boilerplate')
      .and('contain', 'Vite Starter Template')
      .and('contains', /(^See )((<.+>))( README.md )((<\/a>))( for more information.$)/)
  })
})
