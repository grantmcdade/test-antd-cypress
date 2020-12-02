/// <reference types="cypress" />

describe('State', () => {
  it('Loads the page', () => {
    cy.visit('/state')
  })

  it('Increases the counter value', () => {
    cy.visit('/state')

    cy.get('.cy-count').should("contain.text", "0")
    cy.get('.cy-inc').click()
    cy.get('.cy-count').should("contain.text", "1")
  })

  it('Decreases the counter value', () => {
    cy.visit('/state')

    cy.get('.cy-count').should("contain.text", "0")
    cy.get('.cy-dec').click()
    cy.get('.cy-count').should("contain.text", "-1")

  })

  it('Shows the error correctly', () => {
    cy.visit('/state')

    cy.get('.cy-count').should("contain.text", "0")
    cy.get('.cy-inc-async').click()
    
    cy.get('.ant-alert').should("exist")
    cy.get('.ant-notification-notice').should("exist")
  })
})
