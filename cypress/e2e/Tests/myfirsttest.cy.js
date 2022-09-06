describe("empty spec", () => {
  it.skip("passes", function () {
    // cy.pause();
    cy.visit("https://www.edgewordstraining.co.uk/demo-site");
    cy.get(".woocommerce-store-notice__dismiss-link").click();
    cy.get("#woocommerce-product-search-field-0").type("cap{enter}");

    // //cy.get(".single_add_to_cart_button").click();
    // cy.get("div#product-29 div.summary")
    //   .find("button[name=add-to-cart]")
    //   .click();
    cy.get("div#product-29 div.summary").within(() => {
      cy.get("button[name=add-to-cart]").click();
    });

    cy.contains(/^view/i).click(); // start with "view" (/^view/) and is case insensitive (/view/i)

    cy.get("#content").contains("Cap");
  });

  it("is another test", function () {
    cy.visit("https://google.com");
    cy.get("#W0wltc > .QS5gu").click();
  });

  it("is another test", function () {
    cy.visit("https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html");
    cy.get("input[type=radio").click({ multiple: true });
    cy.get("#textInput").type("Tomasz Tracz", { delay: 200 });
    cy.get("#textInput")
      .invoke("val")
      .then((text) => console.log("Before " + text));

    console.log("After");

    cy.get("#checkbox").click();
    cy.get("#checkbox").uncheck();
    cy.get("#checkbox").check();

    cy.get("input[type=radio").check(["Two", "Three"]);
    cy.get("#select").select("Selection Three");
    cy.log("Login Successful");
    cy.log("normal");
    cy.log("**bold**");
    cy.log("_italic_");
    cy.log("[blue](http://example.com)");
    cy.log(
      "![Logo](http://edgewordstraining.co.uk/training-site/images/site_logo.gif)"
    );
    cy.screenshot();
    cy.get("#textInput").screenshot("After");
  });
});
