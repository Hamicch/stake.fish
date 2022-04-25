/// <reference types="cypress" />

describe("Stake Fish Exhange Listing Home Page", () => {
	it("loads successfully", () => {
		cy.visit("http://localhost:3000");

		cy.get("tr").should("have.length", 11);
		cy.get("table").contains("td", "Binance").should("be.visible");
	});
});
