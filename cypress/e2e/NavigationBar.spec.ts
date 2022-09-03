// /// <reference types="Cypress" />
const sizes: Cypress.ViewportPreset[] = ['ipad-mini', 'macbook-13']

context('UI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  sizes.forEach((size) => {
    it(`Should display AppBar follow size screen (${size})`, () => {
      cy.viewport(size)

      cy.url()
        .should('eq', 'http://localhost:5173/')

      if (size === 'ipad-mini') {
        cy.get('p')
          .contains('|')
          .should('not.be.visible')

        cy.get('[data-test="btn-drawer"]')
          .should('be.visible')
          .click()
      }
      if (size === 'macbook-13') {
        cy.get('[data-test="btn-drawer"]')
          .should('not.be.visible')

        cy.get('p')
          .contains('|')
          .should('be.visible')
      }

      cy.get('.v-toolbar-title')
        .contains('Mango Boilerplate')

      cy.get('[data-test="btn-nav-home"]:visible')
        .should('be.visible', 1)

      cy.get('[data-test="btn-nav-counter"]:visible')
        .should('be.visible', 1)

      cy.get('button')
        .find('.mdi-magnify')

      cy.get('button')
        .find('.mdi-dots-vertical')
    })

    it(`Should work correctly, redirecting by AppBar menu (${size})`, () => {
      cy.viewport(size)

      cy.url()
        .should('eq', 'http://localhost:5173/')

      if (size === 'ipad-mini') {
        cy.get('[data-test="btn-drawer"]')
          .click()
      }

      cy.get('[data-test="btn-nav-counter"]:visible')
        .click()

      cy.url()
        .should('eq', 'http://localhost:5173/counter')

      if (size === 'ipad-mini') {
        cy.get('[data-test="btn-drawer"]')
          .click()
      }

      cy.get('[data-test="btn-nav-home"]:visible')
        .click()

      cy.url()
        .should('eq', 'http://localhost:5173/')
    })
  })
})
