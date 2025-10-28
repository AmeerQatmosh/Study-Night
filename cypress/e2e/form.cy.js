/// <reference types="cypress" />
/* eslint-env mocha */

describe("Form functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  // Helper: open Card Sets page and toggle form
  const openCardSets = () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy=toggle_form]").click();
  };

  it("creates a set successfully (happy path)", () => {
    openCardSets();
    cy.get("[data-cy=set_form]").within(() => {
      cy.get('input[name="titleInput"]').type("Spanish Basics");
      cy.root().submit();
    });

    // Assert new set appears
    cy.contains("Spanish Basics").should("be.visible");

    // Verify DOM update — one new set card exists
    cy.get(".cardSets").should("have.length.greaterThan", 0);
  });

  it("shows error when submitting empty set name (unhappy path)", () => {
    openCardSets();
    cy.get("[data-cy=set_form]").within(() => {
      cy.root().submit();
    });
    cy.get("p.error").should("contain.text", "TITLE CANNOT BE EMPTY");
  });

  it("adds a card successfully (happy path)", () => {
    cy.get("#cardSetPage").click();
    cy.get(".cardSets").first().click();
    cy.get("[data-cy=toggle_form]").click();

    cy.get("[data-cy=card_form]").within(() => {
      cy.get('input[name="termInput"]').clear().type("Hola");
      cy.get('input[name="descriptionInput"]').clear().type("Hello");
      cy.root().submit();
    });

    cy.wait(500);

    // Assert card added correctly
    cy.get("main").within(() => {
      cy.contains("Hola").should("exist");
      cy.contains("Hello").should("exist");
      cy.get("p, div").contains("Hola").should("exist");
    });
  });

  it("shows error when adding empty card (unhappy path)", () => {
    cy.get("#cardSetPage").click();
    cy.get(".setContainer .cardSets").first().click();
    cy.get("[data-cy=toggle_form]").click();

    cy.get("[data-cy=card_form]").within(() => {
      cy.root().submit();
    });

    cy.get("p.error").should("contain.text", "CANNOT BE EMPTY");
  });
});
