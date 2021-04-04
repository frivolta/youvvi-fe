import { testUser } from "../config/users";
import { NETWORK } from "../config/variables";
//@ts-ignore
import * as completeProfile from "../fixtures/completeProfile.json";
//@ts-ignore
import * as completeProfileNoSkills from "../fixtures/completeProfileNoEducations.json";
//@ts-ignore
import * as completeProfilePostSkills from "../fixtures/completeProfilePostSkillset.json";
//@ts-ignore
import * as completeProfilePatchSkills from "../fixtures/completeProfilePatchSkillset.json";

const newSkillset = {
  title: "New skillset",
  skills: ["skill one", "skill two"],
};

describe("Skillset", () => {
  beforeEach(() => {
    localStorage.setItem("yuvviToken", testUser.validToken);
    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
  });

  it("let user navigate to skills from the sidenav menu", () => {
    cy.contains("Personal skills").click();
    cy.location("pathname").should("eq", "/personal-skills");
  });

  it("let user see his personal skills titles", () => {
    const skills = completeProfile.user.skillsets;
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfile,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");
    skills.forEach((s) => {
      cy.contains(s.title);
    });
  });

  it("let user see his skills page title", () => {
    cy.intercept("GET", "**/profile/complete-profile", {
      statusCode: 200,
      body: completeProfileNoSkills,
    }).as("fetchCompleteProfileRequest");
    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.contains("Your current skills");
  });

  it("let user open a popup and create a skill", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfileNoSkills,
      completeProfilePostSkills,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("POST", "**/skillset", {
      statusCode: 200,
      body: { ok: true },
    }).as("postSkills");

    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");

    cy.get("[data-testid='create-skill-group-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");

    cy.get("input[name='title']").click().type(newSkillset.title);
    newSkillset.skills.forEach((s) => {
      cy.get("input[name='skill']").click().type(s);
      cy.get("[data-testid='send-skillset-skill']").click();
    });
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.wait("@fetchCompleteProfileRequest");
    cy.get('[data-testid="skillset-New skillset"]').should("be.visible");
  });

  it("let user edit a skillset", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostSkills,
      completeProfilePatchSkills,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("PATCH", "**/skillset/14", {
      statusCode: 200,
      body: { ok: true },
    }).as("postEducation");
    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='edit-skillset-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']")
      .should("have.value", "New skillset")
      .click()
      .type(" patched");
    cy.get("[data-testid='remove-skill-skill two']").click();
    cy.get("input[name='skill']").click().type("skill patched");
    cy.get("[data-testid='send-skillset-skill']").click();
    cy.get('[data-testid="Button"]').should("be.enabled").click();
    cy.get('[data-testid="skillset-New skillset patched"]').should(
      "be.visible"
    );
    cy.contains("Skill Group updated");
  });
  it("let user delete a skillset", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfilePostSkills,
      completeProfileNoSkills,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("DELETE", "**/skillset/14", {
      statusCode: 200,
      body: { ok: true },
    }).as("deleteSkillset");
    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");
    cy.get("[data-testid='delete-skillset-button']").click();
    cy.get('[data-testid="skillset-New skillset patched"]').should("not.exist");
    cy.contains("Skill Group deleted");
  });

  it("prevent user from creating an invalid skill", () => {
    let getProfileCount = -1;
    const profileResponses = [
      completeProfileNoSkills,
      completeProfilePostSkills,
    ];
    cy.intercept("GET", "**/profile/complete-profile", (req) => {
      getProfileCount++;
      req.reply(profileResponses[getProfileCount]);
    }).as("fetchCompleteProfileRequest");
    cy.intercept("POST", "**/skillset", {
      statusCode: 200,
      body: { ok: true },
    }).as("postSkills");

    cy.visit(`${NETWORK.LOCAL}/personal-skills`);
    cy.wait("@fetchCompleteProfileRequest");

    cy.get("[data-testid='create-skill-group-button']").click();
    cy.get('[data-testid="Button"]').should("be.disabled");

    cy.get("input[name='title']").click().type(newSkillset.title).clear();
    newSkillset.skills.forEach((s) => {
      cy.get("input[name='skill']").click().type(s);
      cy.get("[data-testid='send-skillset-skill']").click();
    });
    cy.get("input[name='skill']").click().type(newSkillset.title).clear();
    cy.get('[data-testid="Button"]').should("be.disabled");
    cy.get("input[name='title']")
      .click()
      .type(newSkillset.title)
      .clear()
      .click()
      .type(newSkillset.title);
    cy.get('[data-testid="Button"]').should("be.enabled");
  });
});
