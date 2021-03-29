import { testUser } from "../../config/users";
import { NETWORK } from "../../config/variables";

/**
 * 1) User can login with right credentials
 *  - Type username
 *  - Type password
 *  - Click Signin
 *  - Intercepted api request
 *  - Intercepted succesful response
 *  - Localstorage has token and user
 *  - Success Toaster message
 *  - User is redirected
 *
 * 2) User is rejected if invalid email or password
 *  - Type username
 *  - Type password
 *  - Click Signin
 *  - Intercepted api request
 *  - Intercepted succesful response
 *  - Localstorage has token and user
 *  - Success Toaster message
 *  - User is redirected
 *
 * 3) User is redirected if already validated
 */

describe('Signin', () => {
    beforeEach(()=>{
        cy.visit(`${NETWORK.LOCAL}/signin`).contains("Login");
        cy.location("pathname").should("eq", "/signin");
    })

    it('shows the button disabled if invalid email or password', ()=>{
        cy.get('input[name="email"]')
        .click()
        .type('testUser.email');
        cy.get('button').should('be.disabled')
        
        cy.get('input[name="email"]')
        .click()
        .type(testUser.email);
        cy.get('button').should('be.disabled')

        cy.get('input[name="password"]')
        .click()
        .type(testUser.password);
        cy.get('button').should('be.enabled')
    })

    it('correctly signs in a valid user, saves token in localStorage, shows toaster and redirects', ()=>{
        // Stub signin request
        cy.intercept('POST','**/auth/authenticate',{
            statusCode: 200,
            body:{
                ok: true,
                userId: 'mockedUserId',
                token: 'jwtTokenFromCognito'
            },
            delay:1000
        }).as('signinRequest');
        // Fill fields and click signup button
        cy.get('input[name="email"]')
        .click()
        .type(testUser.email);
        cy.get('input[name="password"]')
        .click()
        .type(testUser.password);
        cy.get("button")
        .contains("Login")
        .click()
        .get('[data-testid="Spinner"]');
        // Wait for signin request then check path, localStorage and toaster message
        cy.wait('@signinRequest').should(()=>  expect(localStorage.getItem('yuvviToken')).to.eq('jwtTokenFromCognito')).location("pathname").should("eq", "/")
        cy.contains("Successfully logged in")
    })

    it('rejects user with correct error message if invalid user or pwd', () => {
        // Stub signin request
        cy.intercept('POST','**/auth/authenticate',{
            statusCode: 400,
            body:{"statusCode":400,"message":"Incorrect username or password.","error":"Bad Request"},
            delay:1000
        }).as('signinRequest');

        cy.get('input[name="email"]')
        .click()
        .type(testUser.email);
        cy.get('input[name="password"]')
        .click()
        .type(testUser.password);
        cy.get("button")
        .contains("Login")
        .click()
        .get('[data-testid="Spinner"]');

        cy.wait('@signinRequest').should(()=>  expect(localStorage.getItem('yuvviToken')).to.not.eq('jwtTokenFromCognito'))
        cy.contains('Incorrect username or password.').should('be.visible')
    })

    it('redirects the user if already logged in',()=>{
        cy.visit(`${NETWORK.LOCAL}/signin`, {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('yuvviToken', testUser.validToken);
            }
        })
        cy.location("pathname").should("eq", "/general");
    })
})