describe('Site loads without problems', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Loads the home page', () => {
        cy.visit('http://localhost:3000')
    })

    it('Displays header element', () => {
        cy.get('[data-cy=header]')
            .should('be.visible')
    })

    it('Displays logo element', () => {
        cy.get('[data-cy=logo]')
            .should('be.visible')
    })

    it('Displays link element', () => {
        cy.get('[data-cy=link]')
            .should('be.visible')
            .should('have.attr', 'href', 'https://reactjs.org')
    })


})

describe('Redirects to links', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Navigates rom Home To Hello', () => {
        cy.get('[data-cy=hello-link]')
            .click()

        cy.url().should('include', '/hello')
    })

    it('Navigates rom Hello to Home', () => {
        cy.visit('http://localhost:3000/hello')

        cy.get('[data-cy=hello-link]')
            .click()

        cy.url().should('include', 'http://localhost:3000/')
    })
})
