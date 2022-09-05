export interface Animal {
  _id: string;
  tagId: string;
  race: string;
  genre: "MALE" | "FEMALE";
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

export interface MedicalTreatment {
  name: string;
  description: string;
  date: string;
}
