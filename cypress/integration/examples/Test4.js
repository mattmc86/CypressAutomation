//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My Fourth Test suite', () => {
    it('My fourth test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //alerts and pop ups, Cypress automatically ok's alerts or Yes' confirms
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
      //if you need to get the text then Cypress can fire browser events using on and then triggers a window:alert
      cy.on('window:alert',(str)=>
      {
          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm',(str)=>
      {
          //Mocha
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

    })
    
  })

