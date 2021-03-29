// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { testUser } from "../config/users";

export const signinUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // Stub signin request
  cy.intercept("POST", "**/auth/authenticate", {
    statusCode: 200,
    body: {
      ok: true,
      userId: "mockedUserId",
      token: testUser.validToken,
    },
    delay: 1000,
  }).as("signinRequest");

  // Fill fields and click signup button
  cy.get('input[name="email"]').click().type(email);
  cy.get('input[name="password"]').click().type(password);
  cy.get("button").contains("Login").click().get('[data-testid="Spinner"]');
  cy.wait("@signinRequest").should(() =>
    expect(localStorage.getItem("yuvviToken")).to.not.eq(testUser.validToken)
  );
};

Cypress.Commands.add("signinUser", signinUser);
