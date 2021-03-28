import { CompleteProfile, Education } from "./entities.types";

export interface QueryOutput {
    ok: boolean;
    error?: string;
}

export interface AuthenticationInput{
    name: string;
    password: string;
}

export interface AuthenticationOutput extends QueryOutput{
    token?: string;
    userId?:string;
    email?:string;
}

export interface EducationOutput extends QueryOutput{
    educations?: Education[]
}

// Profile output
export interface GetCompleteUserProfileOutput extends QueryOutput{
    user?: CompleteProfile;
}