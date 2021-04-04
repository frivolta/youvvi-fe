import { testUser } from "../config/users";
import { NETWORK } from "../config/variables";
//@ts-ignore
import * as completeProfile from "../fixtures/completeProfile.json";
//@ts-ignore
import * as completeProfileNoEducations from "../fixtures/completeProfileNoEducations.json";
//@ts-ignore
import * as completeProfilePostWorkingExperience from "../fixtures/completeProfilePostWorkingExperience.json";
//@ts-ignore
import * as completeProfilePatchWorkingExperience from "../fixtures/completeProfilePatchedWorkingExperience.json";

const newWorkingExperience = {
  title: "New Working Experience",
  position: "New position",
  startDate: "Mar 2018",
  endDate: "Apr 2019",
  description: "Job description",
};

describe("Working experience informations", () => {
  beforeEach(() => {
    localStorage.setItem("yuvviToken", testUser.validToken);
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
  });
  it("let user navigate to working-experience from the sidenav menu", () => {
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.contains("Working experience").click();
    cy.location("pathname").should("eq", "/working-experiences");
  });
  it("let user see his working experiences", () => {
    const workingExperiences = completeProfile.user.workingExperiences;
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.wait("@fetchCompleteProfileRequest");
    workingExperiences.forEach((we) => {
      cy.contains(we.title);
    });
  });

  it("let user open a popup and create a new working-experience", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfileNoEducations,
      completeProfilePostWorkingExperience,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("POST", "**/working-experience", {
      statusCode: 200,
      body: { ok: true },
    }).as("postWorkingExperience");
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='create-working-experience-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']").click().type(newWorkingExperience.title);
    cy.get("input[name='position']")
      .click()
      .type(newWorkingExperience.position);
    cy.get("input[name='startDate']")
      .click()
      .type(newWorkingExperience.startDate);
    cy.get("input[name='endDate']").click().type(newWorkingExperience.endDate);
    cy.get("input[name='description']")
      .click()
      .type(newWorkingExperience.description);
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="workingExperience-New Working Experience"]').should(
      "be.visible"
    );
  });

  it("let user edit an working-experience", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostWorkingExperience,
      completeProfilePatchWorkingExperience,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("PATCH", "**/working-experience/16", {
      statusCode: 200,
      body: { ok: true },
    }).as("patchWorkingExperience");
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='edit-workingExperience-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']")
      .should("have.value", newWorkingExperience.title)
      .click()
      .type(" Patched");
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="workingExperience-New Working Patched"]').should(
      "be.visible"
    );
    cy.contains("Working experience updated");
  });

  it("let user delete an working experience", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostWorkingExperience,
      completeProfileNoEducations,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("DELETE", "**/working-experience/16", {
      statusCode: 200,
      body: { ok: true },
    }).as("deleteWorkingExperience");
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='delete-workingExperience-button']").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="workingExperience-New Working Experience"]').should(
      "not.exist"
    );
    cy.contains("Working experience deleted");
  });
  it("prevent user from adding invalid education", () => {
    let getProfileCount = -1;
    const profileResponses = [completeProfileNoEducations];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/working-experiences`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='create-working-experience-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']")
      .click()
      .type(newWorkingExperience.title)
      .clear();
    cy.get("input[name='position']")
      .click()
      .type(newWorkingExperience.position)
      .clear();
    cy.get("input[name='startDate']").click().type("Invalid date Invalid Date");
    cy.get("input[name='endDate']").click().type("Invalid date Invalid Date");
    cy.contains("title is a required field");
    cy.contains("position is a required field");
    cy.contains("Too long");
    cy.get('[data-testid="Button"]').should("be.disabled");
  });
});
