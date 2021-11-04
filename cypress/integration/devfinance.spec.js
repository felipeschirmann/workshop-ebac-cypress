/// <reference types="cypress" />

describe ('DevFinance', () => {
    it('Add new transaction of in', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()
    })
});