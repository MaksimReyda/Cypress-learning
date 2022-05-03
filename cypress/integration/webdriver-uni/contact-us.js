/// <reference types="cypress" />




describe("Test Contact Us form via WebdriverUni", () => {

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it.only("Should be able to submit", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // cy.document().should('have.attr', 'title').and('eq', 'WebDriver | Contact Us')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/Contact-Us/contactus.html')
        
        cy.get('[name="first_name"]').type('Maksym')
        cy.get('[name="last_name"]').type('Reida')
        cy.get('[name="email"]').type('test@mail.com')
        cy.get('textarea.feedback-input').type('some test text in comments')
        cy.get('[type="submit"]').click()

        cy.get('#contact_reply h1').should('have.text', 'Thank You for your Message!')
    })

    it("Should NOT be able to submit", () => {
        cy.get('[name="first_name"]').type('Maksym')
        cy.get('[name="last_name"]').type('Reida')
        
        cy.get('textarea.feedback-input').type('some test text in comments')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})