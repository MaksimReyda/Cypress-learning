/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it("Should be able to submit", () => {
        cy.get('[name="first_name"]').type('Maksym')
        cy.get('[name="last_name"]').type('Reida')
        cy.get('[name="email"]').type('test@mail.com')
        cy.get('textarea.feedback-input').type('some test text in comments')
        cy.get('[type="submit"]').click()
    })

    it("Should NOT be able to submit", () => {
        cy.get('[name="first_name"]').type('Maksym')
        cy.get('[name="last_name"]').type('Reida')
        
        cy.get('textarea.feedback-input').type('some test text in comments')
        cy.get('[type="submit"]').click()
    })
})