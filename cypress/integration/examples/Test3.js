//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My Third Test suite', () => {
    it('My third test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //checkboxes
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //Static dropdown

      cy.get('select').select('option2').should('have.value','option2')

      //dynamic dropdown

      cy.get('#autocomplete').type('ind')

      cy.get(' .ui-menu-item div').each(($e1, index, $list) =>
      {
        if($e1.text() === 'India')
        {
         // cy.wrap.$e1.click()
          cy.wrap($e1).click()
        }
      })

      cy.get('#autocomplete').should('have.value','India')

      //hidden elements

      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      //radio buttons
      //cy.get('[for="radio3"] > .radioButton').check()
      cy.get('[value="radio2"]').check().should('be.checked')



    })
    
  })

