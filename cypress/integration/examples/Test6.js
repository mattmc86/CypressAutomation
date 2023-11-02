//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My Sixth Test suite', () => {
    it('My sixth test case!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //web tables



      cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>
      {
         const text = $e1.text()
         if (text.includes("Python"))
         {
          //traverse to sibling using next but only works on get
          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
          {
             const priceText =  price.text()
             expect(priceText).to.equal('25')
          })
         }
      })


      

    })
    
  })

