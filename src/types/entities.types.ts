export interface CoreEntity{
    id: number
    createdAt: Date;
    updatedAt: Date;
  }

export interface CompleteProfile {
    email: string;
    userId:string;
    profile: Profile;
    workingExperiences: WorkingExperience[];
    educations: Education[];
    skillsets: Skillset[];
}

export interface Profile extends CoreEntity{
    name: string;
    email?: string;
    phone?: string;
    website?: string;
    biography?: string;
    workTitle: string;
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