import { testUser } from "../config/users";
import { NETWORK } from "../config/variables";
//@ts-ignore
import * as completeProfile from "../fixtures/completeProfile.json";
//@ts-ignore
import * as completeProfileNoEducations from "../fixtures/completeProfileNoEducations.json";
//@ts-ignore
import * as completeProfilePostEducation from "../fixtures/completeProfilePostEducation.json";
//@ts-ignore
import * as completeProfilePatchEducation from "../fixtures/completeProfilePatchEducation.json";

const newEducation = {
  title: "New education",
  institute: "New institute",
  startYear: "2015",
  endYear: "2018",
};

// User see the modal button disabled if no information is inserted
describe("Education informations", () => {
  beforeEach(() => {
    localStorage.setItem("yuvviToken", testUser.validToken);
    cy.visit(`${NETWORK.LOCAL}/education`);
  });

  it("let user navigate to education from the sidenav menu", () => {
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.contains("Education").click();
    cy.location("pathname").should("eq", "/education");
  });

  it("let user see his education titles", () => {
    const educations = completeProfile.user.educations;
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    educations.forEach((education) => {
      cy.contains(education.title);
    });
  });

  it("let user see his education title", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfileNoEducations,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.contains("Your current education titles");
  });

  it("let user open a popup and create a new education", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfileNoEducations,
      completeProfilePostEducation,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("POST", "**/education", {
      statusCode: 200,
      body: { ok: true },
    }).as("postEducation");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='create-education-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']").click().type(newEducation.title);
    cy.get("input[name='institute']").click().type(newEducation.institute);
    cy.get("input[name='startYear']").click().type(newEducation.startYear);
    cy.get("input[name='endYear']").click().type(newEducation.endYear);
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="education-New Education"]').should("be.visible");
  });
  it("let user edit an education", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostEducation,
      completeProfilePatchEducation,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("PATCH", "**/education/16", {
      statusCode: 200,
      body: { ok: true },
    }).as("postEducation");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='edit-education-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']")
      .should("have.value", "New Education")
      .click()
      .type(" edited");
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="education-New Education edited"]').should(
      "be.visible"
    );
    cy.contains("Education updated");
  });
  it("let user delete an education", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostEducation,
      completeProfileNoEducations,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("DELETE", "**/education/16", {
      statusCode: 200,
      body: { ok: true },
    }).as("postEducation");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='delete-education-button']").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="education-New Education edited"]').should(
      "not.exist"
    );
    cy.contains("Education deleted");
  });
  it("prevent user from adding invalid education", () => {
    let getProfileCount = -1;
    const profileResponses = [completeProfileNoEducations];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/education`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='create-education-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']").click().type(newEducation.title).clear();
    cy.get("input[name='institute']")
      .click()
      .type(newEducation.institute)
      .clear();
    cy.get("input[name='startYear']").click().type("Invalid date");
    cy.get("input[name='endYear']").click().type("Invalid date");
    cy.contains("title is a required field");
    cy.contains("institute is a required field");
    cy.contains("Too long");
    cy.get('[data-testid="Button"]').should("be.disabled");
  });
});
