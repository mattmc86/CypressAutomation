/// <reference types="Cypress" />

describe('My fake2 Test Suite', function()
{
    it('My fake2 test case',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
     
       
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=mckenna'

            req.continue((res)=>
            {
                expect(res.statusCode).to.equal(403)
            })

        }).as("dummyUrl")

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')

     

    })
})