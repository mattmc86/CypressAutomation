/// <reference types="Cypress" />

context('Window',() =>
{
    it('Database Interaction',() =>
    {
        let data
       //select * from [dbo].[Persons] 

       cy.sqlServer("select * from Persons").then(function(result)
       {
            console.log(result[0][1])
            console.log(result[1])
            data = result
            //then below would use it to add somewhere
           // cy.get('some box').type(data[0])
       })
    })
})