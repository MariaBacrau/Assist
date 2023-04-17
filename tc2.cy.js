/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Navigate to Top voluntari page', () => {
        //Click on the link to Top voluntari page
    cy.get('a[href*="/search"]').click()
        //Check if the url is correct
    cy.url().should('contains','/search')
        //Check if the title is correct
    cy.get('div.vue-map').should('exist')
    cy.get('div[class*="card"][class*="card-volunteer"]').should('exist')

   
  })

})
