/// <reference types="cypress" />

describe('Create Vault Test cases', () => {

    Cypress.config('pageLoadTimeout', 100000)

    beforeEach(() => {
        cy.visit('https://dev2.unipilot.io/add', {
            auth: {
              username: 'admin',
              password: 'A>a=bV]6rtQ\\T5*J',
            },
          })
    })

    it('Test case 1', () => {
        
    })

})