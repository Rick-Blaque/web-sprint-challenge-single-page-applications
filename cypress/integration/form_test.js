describe("user onbording app", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })

    const special = () => cy.get('#special-text')
    const form = () => cy.get('#pizza-form')
    const pepperoni = () => cy.get('input[name="pepperoni"]')
    const mushroom = () => cy.get('input[name="mushroom"]')
    const extraCheese = () => cy.get('input[name="extraCheese"]')
    const ham = () => cy.get('input[name="ham"]')
    

     it('how each component should work', () => {
        
        
        special().should('exist')
        form().should('exist')
    })
    it('can type inside of input', () => {
        special()
        .should('have.value', '')
        .type("working")
        .should('have.value', 'working')
    })

    it("check that multiple boxes can be checked", () => {
        pepperoni()
        .check({ force: true })
        .should('be.checked') 

        extraCheese()
        .check({ force: true })
        .should('be.checked') 

        mushroom()
        .check({ force: true })
        .should('be.checked') 

        ham()
        .check({ force: true })
        .should('be.checked') 
    })

    it('form can be submitted', () => {
        form()
        .submit()
    })
})