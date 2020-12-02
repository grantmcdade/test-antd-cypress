/// <reference types="cypress" />

describe('React Test Harness', () => {
  it('Loads the home page', () => {
    cy.visit("/")
  })
})