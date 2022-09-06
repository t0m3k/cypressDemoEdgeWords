describe("empty spec", () => {
  it.only("passes", () => {
    // cy.pause();
    cy.visit("https://www.edgewordstraining.co.uk/demo-site");
    cy.get(".woocommerce-store-notice__dismiss-link").click();
    cy.get("#woocommerce-product-search-field-0").type("cap{enter}");
  });

  it("is another test", () => {
    cy.visit("https://google.com");
    cy.get("#W0wltc > .QS5gu").click();
  });
});
