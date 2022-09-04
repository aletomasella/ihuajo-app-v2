export interface Animal {
  _id: string;
  tagId: string;
  race: string;
  genre: Genre;
  boughtPrice: number;
  boughtFrom: string;
  initialWeight: number;
  finalWeight: number;
  actualLocation: string;
  allLocations: [string];
  isCastrated: boolean;
  medicalTreatments: MedicalTreatment[];
  isAlive: boolean;
  isSold: boolean;
  soldPrice: number;
  soldTo: string;
  soldDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

enum Genre {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

interface MedicalTreatment {
  name: string;
  description: string;
  date: string;
}
