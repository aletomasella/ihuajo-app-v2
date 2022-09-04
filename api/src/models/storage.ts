import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel: Model<Storage> = model("Storage", StorageSchema);

export default StorageModel;
