import {
  CompleteProfile,
  Education,
  Profile,
  WorkingExperience,
} from "./entities.types";

export interface QueryOutput {
  ok: boolean;
  error?: string;
}

export interface AuthenticationInput {
  name: string;
  password: string;
}

export interface AuthenticationOutput extends QueryOutput {
  token?: string;
  userId?: string;
  email?: string;
}

export interface EducationOutput extends QueryOutput {
  educations?: Education[];
}

// Profile output
export interface GetCompleteUserProfileOutput extends QueryOutput {
  user?: CompleteProfile;
}

// Profile update output
export type UpdateUserProfileGeneralInfo = Profile;

// Education inputs
export type CreateEducationInput = {
  title: string;
  institute: string;
  startYear: string;
  endYear?: string;
};

export type EditOrCreateEducationInput = {
  id?: number;
  title: string;
  institute: string;
  startYear: string;
  endYear?: string;
};

export type EditEducationInput = {
  id: number;
  title?: string;
  institute?: string;
  startYear?: string;
  endYear?: string;
};

// Working experiences types
export type CreateWorkingExperienceInput = Omit<
  WorkingExperience,
  "id" | "createdAt" | "updatedAt"
>;

export type EditOrCreateWorkingExperienceInput = {
  id?: number;
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
  isActual: boolean;
  description?: string;
};

export type EditWorkingExperienceInput = Omit<
  WorkingExperience,
  "createdAt" | "updatedAt"
>;
