import { Schema, Types, model, Model } from "mongoose";
import { Animal, Genre } from "../interfaces/animal.interface";

const AnimalSchema = new Schema<Animal>(
  {
    tagId: {
      type: String,
      required: true,
      unique: true,
    },
    race: {
      type: String,
    },
    genre: {
      type: String,
      enum: [Genre.MALE, Genre.FEMALE],
    },
    boughtPrice: {
      type: Number,
    },
    boughtFrom: {
      type: String,
    },
    initialWeight: {
      type: Number,
    },
    finalWeight: {
      type: Number,
      allowNull: true,
    },
    actualLocation: {
      type: String,
    },
    allLocations: {
      type: [String],
    },
    isCastrated: {
      type: Boolean,
      default: true,
    },
    medicalTreatments: {
      type: [{}],
      allowNull: true,
    },
    isAlive: {
      type: Boolean,
      default: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    soldPrice: {
      type: Number,
      allowNull: true,
    },
    soldTo: {
      type: String,
      allowNull: true,
    },
    soldDate: {
      type: Date,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AnimalModel: Model<Animal> = model("Animal", AnimalSchema);

export default AnimalModel;
