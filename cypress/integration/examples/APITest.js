/// <reference types="Cypress" />

//http://216.10.245.166

//Library/Addbook_php

describe('My API Test Suite', function()
{
    it('My API test case',function(){

        cy.request('POST','http://216.10.245.166/Library/Addbook_php',{
            "name":"My test book",
            "isbn": "gfhbcv",
            "aisle":"22s3",
            "author":"Matt McKenna"

        }).then(function(response)

  
    {
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
    })
    })
})
