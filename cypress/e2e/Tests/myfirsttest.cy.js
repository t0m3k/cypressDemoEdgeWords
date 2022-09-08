describe("empty spec", () => {
  before(function () {
    cy.log("Runs before any tests get to execute");
  });
  beforeEach(function () {
    cy.log("Runs before each test");
  });

  afterEach(function () {
    cy.log("Runs after each and every test executes");
  });

  after(function () {
    cy.log("Runs once at the end of this suite");
  });

  it("Orders an item", function () {
    cy.addToCart("belt");
  });
  it("is another test", function () {
    cy.visit("https://google.com");
    cy.get("#W0wltc > .QS5gu").click();
  });

  it("forms test", function () {
    // page to visit
    cy.visit("https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html");

    // get input elements with type radio and click all of them
    cy.get("input[type=radio").click({ multiple: true });

    // get element by id textInput and type into it with delay of 100 ms
    cy.get("#textInput")
      .type("Tomasz Tracz", { delay: 100 })
      .should("have.value", "Tomasz Tracz");

    cy.get("#textInput").invoke("val").should("be.a", "string");
    cy.get("#textInput")
      .invoke("val")
      .then((value) => {
        expect(value).to.equal("Tomasz Tracz");
      });

    cy.get("input[type=radio").then((value) => {
      console.log(value);
    });

    // get element by id textInput and using then print value to the console
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
