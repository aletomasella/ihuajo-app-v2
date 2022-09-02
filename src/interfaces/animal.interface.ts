export interface Animal {
  tagId: string;
  race: string;
  genre: Genre;
  boughtPrice: number;
  initialWeight: number;
  finalWeight: number;
  boughtFrom: string;
  actualLocation: string;
  allLocations: string[];
  isCastrated: boolean;
  medicalTreatments: MedicalTreatment[];
  isAlive: boolean;
  isSold: boolean;
  soldPrice: number;
  soldTo: string;
  soldDate: Date;
}

export interface MedicalTreatment {
  name: string;
  date: string;
  description: string;
}

export enum Genre {
  FEMALE = "FEMALE",
  MALE = "MALE",
}
