/// <reference types="cypress" />
/* eslint-env mocha */

describe("Navigation flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  // Custom helper for clean navigation (defined inline for simplicity)
  const navigateTo = (pageName, expectedText) => {
    cy.contains(pageName).click();
    cy.get("h1, h2, h3, p")
      .should("contain.text", expectedText)
      .and("be.visible");
  };

  it("navigates to the Card Sets page", () => {
    navigateTo("Card Sets", "Study Set Library");
    // Bonus: Verify the toggle button exists
    cy.get("[data-cy=toggle_form]").should("exist");
  });

  it("navigates to the About page", () => {
    navigateTo("About", "About");
    // Check that the image container is visible
    cy.get(".aboutContainer img").should("be.visible");
  });

  it("navigates to the Home page", () => {
    navigateTo("Home", "Study Night");
    // Verify that home container and heading exist
    cy.get(".homeContainer").should("exist");
    cy.get(".homeContainer h1").should("contain.text", "Study Night");
  });
});
