/// <reference types="Cypress" />

describe('My fake Test Suite', function()
{
    it('My fake test case',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
     
       
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body :[{
                "book_name": "RestAssured with Java Test",
                 "isbn": "DSR",
                 "aisle": "2304"
            }]
        }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').then(({request,response})=>
        {
            cy.get('tr').should('have.length',response.body.length+1)
          
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

        //length of response array and should match table rows from UI


     

    })
})