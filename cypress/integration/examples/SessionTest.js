/// <reference types="Cypress" />
const neatCSV = require('neat-csv')
let productName
describe('JWT Session', () =>{
    it('local', async () =>{
        cy.LoginAPI().then(function()
        {

            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then(function(ele)
        {
            productName = ele.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Copuntry']").type('ind')
        cy.get('.ta-results button').each((el, index, $list)=>
            {
                if($el.text()===" India")
                {
                    cy.wrap($el).click()
                }
            })

        cy.get('.action_submit').click()
        cy.wait(4000)
        cy.get('.order-summaryt button').click()

        
        cy.readFile(Cypress.config("fileServerFolder")+"cypress/downloads/order-invoice_dwight.csv")
        .then(async(text)=>
        {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV = csv[0]["Product Name"]
            expect(productName).to.equal(actualProductCSV)

        })


    })
})