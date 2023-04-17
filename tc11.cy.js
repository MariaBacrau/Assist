/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
  debugger;
  return false;
});
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
    cy.get('i[title="Vizualizeaza"]').first().click()

    cy.get('input[name="contact_first_name"]').should('exist')
    cy.get('input[name="contact_last_name"]').should('exist')
    cy.get('input[name="contact_phone_number"]').should('exist')
    cy.get('span[class="vs__selected"]').should('contain.text',"Medicamente")
    cy.get('textarea[name="description"]').should('exist')
    cy.get('input[placeholder="Nume strada, numar ..."]').should('exist')
    cy.get('input[name="details"]').should('exist')
    cy.get('input[name="county"]').should('exist')
    cy.get('input[name="city"]').should('exist')
    cy.get('input[name="postal_code"]').should('exist')
  })

})
