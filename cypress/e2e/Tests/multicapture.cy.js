describe("multiple capture and comparison", function () {
  it("starts an order then compares prices in the cart", function () {
    cy.visit("https://www.edgewordstraining.co.uk/demo-site/");
    //Place cap order
    cy.get("#woocommerce-product-search-field-0").type("cap{enter}");
    cy.contains("Add to cart").click().screenshot();
    cy.contains("View cart").then(($jqueryelm) => {
      //Bonkers - no need to do this but...
      //contains yeilds a jquery element. You can cypress wrap it then click it
      //cant just do $jqueryelm.click() as thats jQuery's click() - not what we want
      // https://api.jquery.com/click/
      cy.wrap($jqueryelm).click();
    });
    //Capture total price text of product line...then(...)
    cy.get("td.product-subtotal")
      .invoke("text")
      .then((lineprice) => {
        console.log(`We have the line price here ${lineprice}`);
        //Inside 1st then() capture second value...then(...)
        cy.get("tr.cart-subtotal td[data-title=Subtotal]")
          .invoke("text")
          .then((subtotal) => {
            //In here we have a closure over both
            console.log(`${lineprice} and ${subtotal}`);
            //Looks like lineprice as a lot of whitespace
            lineprice = lineprice.trim();
            console.log(`${lineprice} and ${subtotal}`);
            cy.log(`${lineprice} and ${subtotal}`);
            //lineprice = "£17.00" //Just to check assertion is working
            expect(lineprice).to.be.string(subtotal);
          });
      }); //This was all one cy command chain
    cy.log("This runs after the previous cy command has finally finished");
  });

  it("loops elements in different ways", { tags: "@Loop" }, function () {
    cy.visit("https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html");
    cy.get("input[type=radio]") //.debug()//should be 3
      .then(($jqElms) => {
        //cy.wrap($jqElms[2]).click()
        cy.log($jqElms[1].getAttribute("value"));
        for (let index = 0; index < $jqElms.length; index++) {
          cy.log($jqElms[index].getAttribute("value"));
        }
        for (let iterator of $jqElms.get()) {
          cy.wrap(iterator).click();
        }
        let elmarray = $jqElms.get();
        elmarray.forEach((element) => {
          cy.wrap(element).click();
        });
      });
    cy.get("input[type=radio]").each((JQElm, index, HTMLElmArr) => {
      cy.wrap(JQElm).click();
      if (index == 1) {
        cy.log("hi 1");
      }
      for (let iterator of HTMLElmArr) {
        cy.log("Got the whole array here - loops in loops");
        cy.log(iterator.getAttribute("value"));
      }
    });
  });
});
