import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, userId, path }: Storage) => {
  const newUpload = new StorageModel({ fileName, userId, path });
  const savedUpload = await newUpload.save();
  return savedUpload;
};

export { registerUpload };
