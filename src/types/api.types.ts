import { Education } from "./entities.types";

export interface CommonOutput {
    ok: boolean;
    error?: string;
}

export interface AuthenticationOutput extends CommonOutput{
    token?: string;
    userId?:string;
}

export interface EducationOutput extends CommonOutput{
    educations?: Education[]
}