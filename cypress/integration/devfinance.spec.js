/// <reference types="cypress" />

describe ('DevFinance', () => {
    it('Add new transaction of in', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Chocolate')
        cy.get('#amount').type('-3')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 2)

        cy.get('#totalDisplay').contains('R$ 9,00')
    }),

    it('Remove transaction Chocolate', () => {
        cy.get('table > tbody > tr > td > img').last().click()
        cy.get('#totalDisplay').contains('R$ 12,00')
    })
})