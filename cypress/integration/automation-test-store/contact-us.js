/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {

    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
    })

    it("Should be able to submit", () => {
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        //example of using xpath
        cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Maksym')
        cy.get('#ContactUsFrm_email').type('test@email.com')
        cy.get('#ContactUsFrm_enquiry').type('Some text Some textSome text')
        cy.contains('Submit').click()
    })
})