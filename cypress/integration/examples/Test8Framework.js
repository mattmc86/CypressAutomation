/// <reference types='Cypress' />
/// <reference types = "cypress-iframe" />

import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'



describe('My Eighth Test suite', () => {

  before(function(){
    //get data from json file in fixtures folder
    cy.fixture("example").then (function(data)
    {
        this.data=data
    })

  })
    it('My eighth test case!', function() {
      //to increase the timeout option on this spec only
      Cypress.config('defaultCommandTimeout',8000)
     const homePage = new HomePage()
     const productPage = new ProductPage()
    cy.visit(Cypress.env('url')+"/angularpractice/")


      homePage.getEditBox().type(this.data.name)
      homePage.getGender().select(this.data.gender)

      homePage.getTwoWayDataBinding().should('have.value',this.data.name)
      homePage.getEditBox().should('have.attr','minlength','2')

      homePage.getEntrepreneurRadioButton().should('be.disabled')
     // cy.debug()
     Cypress.config('defaultCommandTimeout',8000)
      homePage.getShopTab().click()

      

      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
      })


      productPage.checkOutButton().click()
      var sum = 0

      cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>
      {
      
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        //converts string into number
        sum=Number(sum)+Number(res)
        

      }).then(function()
      {
        cy.log("The total amount is " + sum)
      })
      cy.get('h3 > strong').then(function(element){
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
      })
      

      cy.get(':nth-child(6) > :nth-child(5) > .btn').click()
      cy.get('#country').type('United Kingdom').get('.suggestions > ul > li', { timeout: 10000 }).dblclick()

    //  cy.get('#country').type('India')
     // cy.wait(8000)
      //cy.get('.suggestions > u1 > li > a').click()
    
      cy.get('#checkbox2').click({force:true})
      cy.get('input[type="submit"]').click()
     // cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
      cy.get('.alert').then(function(element)
      {
        const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true
      })

    })
    
  })

