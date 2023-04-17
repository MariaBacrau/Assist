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
    cy.get('input[name="Filter"]').type("afara ploua") 
    cy.get('div').contains('afara ploua').first().should('exist')
    cy.get('input[name="Filter"]').clear() 
    cy.get('input[name="Filter"]').type("Jules radu") 
    cy.get('div').contains('Jules radu').first().should('exist')
    cy.get('input[name="Filter"]').clear() 
    cy.get('input[name="Filter"]').type("Ana Ipatescu 5") 
    cy.get('div').contains('Ana Ipatescu 5').first().should('exist')
    cy.get('input[name="Filter"]').clear() 
    cy.get('input[name="Filter"]').type("07411234") 
    cy.get('div').contains('07411234').first().should('exist')
  })

})
