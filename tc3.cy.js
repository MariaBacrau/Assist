/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
         cy.get('a[href*="/search"]').click()
  })
        //Test if the main page is loaded
  it('Navigate to Top voluntari page', () => {
        //Click on the link to Top voluntari page
    cy.get('a[href*="/search"]').click()
  })
   it('Validate Zoom in/Zoom out', () => {
        //Check if the title is correct
    cy.get('button[title="Zoom in"]').should('exist')
    cy.get('button[title="Zoom out"]').should('exist')
  
    //cy.get('div[class*="card"][class*="card-volunteer"]').should('exist')

   
  })

})
