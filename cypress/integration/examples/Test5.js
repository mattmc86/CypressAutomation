//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My Fifth Test suite', () => {
    it('My fifth test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //child windows and new tabs
      //Cypres cannot switch to a new tab so you have to use jquery to remove target=_blank
      //however, any actions on new tab wont work if domain is different so you need to use the origin method
      //to let Cypress know to action on new tab

      //tab
      // cy.get('#opentab').invoke('removeAttr','target').click()

      // cy.origin("https://www.qaclickacademy.com",()=>
      // {
      //   cy.get('#navbarSupportedContent a[href*="about"]').click()
      //   cy.get('.mt-50 h2').should('contain','QAClick Academy')

      // })

      //window
      //cy.get('#openwindow').invoke('removeAttr','target').click()

    // cy.origin("https://www.qaclickacademy.com",()=>
    //  {
    //    cy.get('#navbarSupportedContent a[href*="about"]').click()
    //    cy.get('.mt-50 h2').should('contain','QAClick Academy')

    //  })

   //  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");       
    //  cy.get(".blinkingText").invoke('removeAttr','target').click();     
       // cy.get("h1").should('contain','Documents request');     }); })
      

    })
    
  })

