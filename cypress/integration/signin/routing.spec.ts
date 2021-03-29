import { testUser } from "../../config/users";
import { NETWORK } from "../../config/variables";

describe('Routing', () => {
    beforeEach(()=>{
        cy.visit(`${NETWORK.LOCAL}/signin`, {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('yuvviToken', testUser.validToken);
            }
        })
    })

    it('shows user email in header', ()=>{
        cy.location("pathname").should("eq", "/general");
        cy.contains(testUser.email).should('be.visible')
    })

    it('let user navigate to preview page', ()=>{
        cy.contains('Preview').click()
        cy.location("pathname").should("eq", "/preview");
    })

    it('let user use sidenav buttons', ()=>{
        cy.contains('Education').click()
        cy.location("pathname").should("eq", "/education");
    })

})