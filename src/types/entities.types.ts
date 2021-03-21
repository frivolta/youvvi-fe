export interface CoreEntity{
    id: number
    createdAt: Date;
    updatedAt: Date;
  }

export interface QueryError {
    error: string
}

export interface CompleteProfile {
    email: string | null;
    userId:string | null;
    profile: Profile;
    workingExperiences?: WorkingExperience[];
    educations?: Education[];
    skillsets?: Skillset[];
}

export interface Profile extends CoreEntity{
    name: string|null;
    email?: string;
    phone?: string;
    website?: string;
    biography?: string;
    workTitle: string|null;
    photoUrl?: string;
}

export interface WorkingExperience extends CoreEntity{
    title: string;
    position: string;
    startDate: string;
    endDate?: string;
    isActual: boolean;
    description?: string;
}

export interface Education extends CoreEntity{
    title: string;
    institute: string;
    startYear: string;
    endYear?: string;
}

export interface Skillset extends CoreEntity{
    title: string;
    skills: string;
}