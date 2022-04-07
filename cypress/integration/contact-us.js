/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    it("Should be able to submit", () => {
        cy.visit('http://www.webdriveruniversity.com/index.html')
        cy.get('#contact-us > .thumbnail').click()
    })

    it("Should NOT be able to submit", () => {
        
    })
})