/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
  it('Navigate to Top voluntari page', () => {
    //autentificare
    cy.get('a[href*="/auth/login"][class="nav-link"]').click()
    cy.url().should('contains','/auth/login')                                                                                                               
        //Check if the title is correct
    cy.get('button.btn-primary').should('contain.text', 'Autentificare')
    cy.get('input[name="phone_number"]').type("0747291098")
    cy.get('input[name="password"]').type("Pisica22")
    cy.get('button[type="submit"]').click()
    cy.get('a.nav-link').should('contain.text', 'Deconectare')
  })

})
