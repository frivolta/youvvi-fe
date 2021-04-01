import { testUser } from "../config/users";
import { NETWORK } from "../config/variables";
//@ts-ignore
import * as completeProfile from "../fixtures/completeProfile.json";

describe("General informations", () => {
  beforeEach(() => {
    localStorage.setItem("yuvviToken", testUser.validToken);
    cy.visit(`${NETWORK.LOCAL}/signin`);
  });

  it("should show a loader while loading prfile", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: {
        ok: true,
        user: {
          id: 1,
          profile: null,
        },
      },
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/general`);
    cy.contains("Loading your profile");
  });

  it("fresh created user can see empty fields", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: {
        ok: true,
        user: {
          id: 1,
          profile: null,
        },
      },
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/general`);
    cy.wait("@fetchCompleteProfileRequest");
    // Form fields to be visible
    cy.get('input[name="name"]')
      .should("be.visible")
      .should("have.value", "John Doe");
    cy.get('input[name="photoUrl"]').should("be.visible");
    cy.get('input[name="workTitle"]')
      .should("be.visible")
      .should("have.value", "Work title");
    cy.get('input[name="biography"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="website"]').should("be.visible");
    cy.get('input[name="phone"]').should("be.visible");
    cy.get('input[name="note"]').should("be.visible");
  });

  it("shows the user complete profile informations", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/general`);
    cy.wait("@fetchCompleteProfileRequest");
    // Form fields to be have right values
    cy.get('input[name="name"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.name);
    cy.get('input[name="photoUrl"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.photoUrl);
    cy.get('input[name="workTitle"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.workTitle);
    cy.get('input[name="biography"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.biography);
    cy.get('input[name="email"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.email);
    cy.get('input[name="website"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.website);
    cy.get('input[name="phone"]')
      .should("be.visible")
      .should("have.value", completeProfile.user.profile.phone);
    cy.get('input[name="note"]').should("be.visible");
    cy.get('[data-testid="bottom-note"]').should("have.length", 2);
  });

  it("let the user update informations", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      status: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.intercept("POST", "**/profile", {
      status: 200,
      body: completeProfile,
    }).as("postCompleteProfileRequest");
    cy.intercept("PATCH", "**/profile", {
      status: 200,
      body: completeProfile,
    }).as("patchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/general`);
    cy.get('input[name="name"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.name);
    cy.get('input[name="photoUrl"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.photoUrl);
    cy.get('input[name="workTitle"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.workTitle);
    cy.get("button").contains("Update general informations").click();
    cy.wait("@patchCompleteProfileRequest");
    cy.contains("Profile updated");
  });

  it("let user changing contact informations", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      status: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.intercept("PATCH", "**/profile", {
      status: 200,
      body: completeProfile,
    }).as("patchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/general`);
    cy.get('input[name="email"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.email);
    cy.get('input[name="website"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.website);
    cy.get('input[name="phone"]')
      .click()
      .clear()
      .type(completeProfile.user.profile.phone);
    cy.get("button").contains("Update contact informations").click();
    cy.wait("@patchCompleteProfileRequest");
    cy.contains("Profile updated");
  });
});
