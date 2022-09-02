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
  const animal = await AnimalModel.findOne({ tagId: id });
  if (animal) {
    return animal;
  } else {
    return { message: "Animal not found" };
  }
};

const updateAnimal = async (id: string, animal: Animal) => {
  const responseUpdate = await AnimalModel.updateOne({ tagId: id }, animal);
  return responseUpdate;
};

const deleteAnimal = async (id: string) => {
  const responseDelete = await AnimalModel.deleteOne({ tagId: id });
  return responseDelete;
};

export { insertAnimal, getAnimals, getAnimal, updateAnimal, deleteAnimal };
