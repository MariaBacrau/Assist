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
    cy.get('a[href="/dashboard/recommended_needs"][class="nav-link"]').contains("Nevoi").click()
    cy.get('button[type="submit"]').click()
    cy.get('input[name="contact_first_name"]').type("Radu")
    cy.get('input[name="contact_last_name"]').type("Suciu")
    cy.get('input[name="contact_phone_number"]').type("0711213345")
    cy.get('input[placeholder="Selectati tipul de nevoie"]').click()
    cy.get('ul[id="vs1__listbox"]').click()
    //cy.get('textarea[name="description"]').type("tratament bacterii")
    cy.get('input[placeholder*="strada"]').type("Calea Unirii nr 3")
    cy.get('input[name="details"]').type("nevoie medicamente bacterii")
    cy.get('input[name="county"]').type("Suceava")
    cy.get('input[name="city"]').type("Suceava")
    cy.get('input[name="postal_code"]').type("720166")
    cy.get('button[type="submit"]').click()
    cy.get('span.text-danger').should('contain.text', 'Acest camp este obligatoriu.')
  })

})
