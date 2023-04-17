/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Navigate to Despe noi page', () => {
        //Click on the link to Despre noi page
    cy.get('a[href*="/about"]').click()
        //Check if the url is correct
    cy.url().should('contains','/about')
        //Check if the title is correct
    cy.get('.mb-5 h3.card-title').should('have.text', 'Despre noi')
    //top voluntari
    cy.get('a[href*="/search"]').click()
        //Check if the url is correct
    cy.url().should('contains','/search')
        //Check if the title is correct
    cy.get('input.form-control').should('exist')
    //nevoi
    cy.get('a[href*="/needs_list"]').click()
    //Check if the url is correct
    cy.url().should('contains','/needs_list')
    //Check if the title is correct
    cy.get('h3.card-title').should('have.text', 'Lista nevoi & Cazuri speciale Lista nevoi  Cazuri speciale ')
    //partea2
    //cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    cy.get('a[href*="/contact"]').click()
    cy.url().should('contains','/contact')
        //Check if the title is correct
    cy.get('h5.text-left').should('have.text', 'Ofera o sugestie')
    //devino voluntar
    cy.get('a[href*="/auth/register"]').click()
    cy.url().should('contains','/auth/register')
        //Check if the title is correct
    cy.get('h5.text-center').should('have.text', 'Inregistrare')
    //autentificare
    cy.get('a[href*="/auth/login"][class="nav-link"]').click()
    cy.url().should('contains','/auth/login')                                                                                                               
        //Check if the title is correct
    cy.get('button.btn-primary').should('contain.text', 'Autentificare')
  })

})
