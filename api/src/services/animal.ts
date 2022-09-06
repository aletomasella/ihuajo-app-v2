import AnimalModel from "../models/animals";
import { Animal } from "../interfaces/animal.interface";

const insertAnimal = async (animal: Animal) => {
  const responseInsert = await AnimalModel.create(animal);
  return responseInsert;
};

const getAnimals = async () => {
  const animals = await AnimalModel.find({});
  return animals;
};

const getAnimal = async (id: string) => {
  const animal = await AnimalModel.findOne({ _id: id });
  if (animal) {
    return animal;
  } else {
    return { message: "Animal not found" };
  }
};

const updateAnimal = async (id: string, animal: Animal) => {
  const responseUpdate = await AnimalModel.updateOne({ _id: id }, animal);
  return responseUpdate;
};

const deleteAnimal = async (id: string) => {
  const responseDelete = await AnimalModel.deleteOne({ _id: id });
  return responseDelete;
};

const getAnimalsByQuery = async (query: any) => {
  if (query.isCastrated) {
    query.isCastrated = query.isCastrated === "true";
  }
  if (query.isAlive) {
    query.isAlive = query.isAlive === "true";
  }
  if (query.isSold) {
    query.isSold = query.isSold === "true";
  }

  if (query.boughtPrice) {
    query.boughtPrice = Number(query.boughtPrice);
  }
  const animals = await AnimalModel.find(query);
  return animals;
};

export {
  insertAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalsByQuery,
};
