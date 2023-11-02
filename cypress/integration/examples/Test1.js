//in JS spec is the name of a test file like Java class what be
//jasmine and mocha are testing frameworks for Cypress - mocha recommended as its automatically bundled whern cypress installed

//describe is test suite level
//describe takes 2 arguments, describtion and function which wraps all it blocks
//it is the test
//it takes 2 arguments, description and function

/// <reference types='Cypress' />

describe('My First Test suite', () => {
    it('My first test case!', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
     // cy.get('.product:visible').should('have.length',4)
      //cy.get('.search-button').click()
      //Parent child - searching for elements only within a parent block, so below is looking for product within products
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').should('have.length',4)
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
      {
        console.log('Added to cart - console message, look at the line above to see that as console.log is not a cypress command you need to add.then and create a method')
      })
      cy.get('@productLocator').find('.product')
      .each(($e1,index, $list) => {
       const textVeg =  $e1.find('h4.product-name').text()
       if(textVeg.includes('Cashews'))
       {
        cy.wrap($e1).find('button').click()
       }
      })

      //assert if logo text displays
      cy.get('.brand').should('have.text', 'GREENKART')

      //print in logs

      cy.get('.brand').then(function(logoElement)
      {
            cy.log(logoElement.text())
      })
    //  cy.log(logo.text())

    cy.get('.cart-icon > img').click
    

    })
    
  })

