//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My Seventh Test suite', () => {
    it('My seventh test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //mouse hover, have to use jquery for this (invoke show)

      cy.get('div.mouse-hover-content').invoke('show')
      cy.contains('Top').click()
      cy.url().should('include','top')


     // use force click for hidden elements
      cy.contains('Top').click({force: true})
      cy.url().should('include','top')


      


      

    })
    
  })

