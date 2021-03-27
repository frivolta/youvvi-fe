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
 * 3) Let user correctly see dashboard if already logged in
 * 4) User is shown enabled or disabled button based on fields validation
 *  - Email but empty password
 *  - All fields are correct, button enabled
 *  - Email is invalid
 *
 */
describe('Signin', () => {
    beforeEach(()=>{
        cy.visit(`${NETWORK.LOCAL}/signin`).contains("Login");
        cy.location("pathname").should("eq", "/signin");
    })

    it('correctly signs in a valid user', ()=>{
        // Stub signin request
        cy.intercept('POST','**/auth/authenticate',{
            statusCode: 200,
            body:{
                ok: true,
                userId: 'mockedUserId',
                token: 'jwtTokenFromCognito'
            }
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
        // Wait for signin request
        cy.wait('@signinRequest')
    })
})