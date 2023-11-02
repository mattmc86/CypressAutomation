/// <reference types='Cypress' />
/// <reference types = "cypress-iframe" />

import 'cypress-iframe'



describe('My Eighth Test suite', () => {
    it('My eighth test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //iframes

      cy.frameLoaded('#courses-iframe')
      cy.wait(5000)

      cy.iframe().find("a[href*='mentorship']").eq(0).click()
      cy.wait(3000)
      cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    })
    
  })

