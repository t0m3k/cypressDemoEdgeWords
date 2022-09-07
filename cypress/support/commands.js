// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("addToCart", (product) => {
  // cy.pause();
  cy.visit("https://www.edgewordstraining.co.uk/demo-site");
  cy.get(".woocommerce-store-notice__dismiss-link").click();
  cy.get("#woocommerce-product-search-field-0").type(product + "{enter}");

  cy.get(".single_add_to_cart_button").click();
  // cy.get("div#product-29 div.summary").find("button[name=add-to-cart]").click();
  // cy.get("div#product-29 div.summary").within(() => {
  //   cy.get("button[name=add-to-cart]").click();
  // });

  cy.contains(/^view/i).click(); // start with "view" (/^view/) and is case insensitive (/view/i)

  cy.get("#content").contains("Cap");

  cy.get("#coupon_code").type("edgewords15{enter}");
});
