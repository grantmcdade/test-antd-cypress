/// <reference types="cypress" />

describe("Remount", () => {
  it("Has the controls", () => {
    cy.visit("/remount");

    cy.get("#testInput").should("exist");

    cy.get(".ant-btn").should("have.length", 1);
  });

  it("Shows typed characters on the page", () => {
    cy.visit("/remount");

    cy.get("#testInput").type("Test");

    cy.get('.ant-btn').click();
    cy.get('article.ant-typography').should("contain.text", "Test")
  });
});
