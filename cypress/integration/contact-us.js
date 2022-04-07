/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    it("Should be able to submit", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Maksym')
        cy.get('[name="last_name"]').type('Reida')
        cy.get('[name="email"]').type('test@mail.com')
        cy.get('textarea.feedback-input').type('some test text in comments')

    })

    it("Should NOT be able to submit", () => {
        
    })
})