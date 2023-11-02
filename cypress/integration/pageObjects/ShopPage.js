class ShopPage
{
getProductCards()
{
    return cy.get("h4.card-title")
}



addProductToCartButton()
{
return cy.get('button.btn.btn-info')
}


}

export default ShopPage