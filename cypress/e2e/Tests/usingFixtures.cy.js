describe("Using fixture and env vars", () => {
  beforeEach(function () {
    cy.fixture("loginData2").then((data) => {
      [this.username, this.password] = data.split(",");
    });
    cy.log(this.username);
  });

  it("uses a fixture", function () {
    cy.visit("https://www.edgewordstraining.co.uk/webdriver2");
    cy.contains("Login To Restricted Area").click();

    // cy.get('#username').type(this.username)

    // cy.get('#password').type(this.password)

    cy.get("#username").type(this.username);

    cy.get("#password").type(this.password);

    cy.contains("Submit").click();

    cy.contains("Log Out").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
  });
});
