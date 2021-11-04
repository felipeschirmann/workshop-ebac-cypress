/// <reference types="cypress" />

describe("DevFinance", () => {
  it("Add new transaction positive", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Freela");
    cy.get("#amount").type("10");
    cy.get("#date").type("2021-11-03");

    cy.contains("button", "Salvar").click();

    cy.get("table tbody tr").should("have.length", 1);

    cy.get("#totalDisplay").contains("R$ 10,00");
  }),
    it("Add other transaction positive", () => {
      cy.get("a[onclick*=open]").click();
      cy.get("#description").type("Freela");
      cy.get("#amount").type("2");
      cy.get("#date").type("2021-11-03");

      cy.contains("button", "Salvar").click();

      cy.get("table tbody tr").should("have.length", 2);

      cy.get("#totalDisplay").contains("R$ 12,00");
    }),
    it("Add transaction negative", () => {
      cy.get("a[onclick*=open]").click();
      cy.get("#description").type("Chocolate");
      cy.get("#amount").type("-3");
      cy.get("#date").type("2021-11-03");

      cy.contains("button", "Salvar").click();

      cy.get("table tbody tr").should("have.length", 3);

      cy.get("#totalDisplay").contains("R$ 9,00");
    }),
    it("Add other transaction negative", () => {
      cy.get("a[onclick*=open]").click();
      cy.get("#description").type("Heineken");
      cy.get("#amount").type("-5");
      cy.get("#date").type("2021-11-03");

      cy.contains("button", "Salvar").click();

      cy.get("table tbody tr").should("have.length", 4);

      cy.get("#totalDisplay").contains("R$ 4,00");
    }),
    it("Remove transaction Chocolate", () => {
      cy.get("table > tbody > tr > td > img").last().click();

      cy.get("#totalDisplay").contains("R$ 9,00");
    });
});
