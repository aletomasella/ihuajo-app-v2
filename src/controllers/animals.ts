import { Request, Response } from "express";
import {
  deleteAnimal,
  getAnimal,
  getAnimals,
  insertAnimal,
  updateAnimal,
} from "../services/animal";
import { handleHttpError } from "../utils/error.handle";

export class AnimalsController {
  constructor() {}

  public async getAnimals(req: Request, res: Response): Promise<void> {
    try {
      const animals = await getAnimals();
      res.send(animals);
    } catch (error) {
      handleHttpError(res, "ERROR_GET_ANIMALS", error);
    }
  }

  public async getAnimal(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      const animal = await getAnimal(id);
      res.send(animal);
    } catch (error) {
      handleHttpError(res, "ERROR_GET_ANIMAL", error);
    }
  }

  public async createAnimal(req: Request, res: Response): Promise<void> {
    try {
      const { animal } = req.body;
      const responseInsert = await insertAnimal(animal);
      res.send(responseInsert);
    } catch (error) {
      handleHttpError(res, "ERROR_CREATE_ANIMAL", error);
    }
  }

  public async updateAnimal(req: Request, res: Response): Promise<void> {
    try {
      const { animal } = req.body;
      const id = req.params.id;
      const responseUpdate = await updateAnimal(id, animal);
      res.send(responseUpdate);
    } catch (error) {
      handleHttpError(res, "ERROR_UPDATE_ANIMAL", error);
    }
  }

  public async deleteAnimal(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const responseDelete = await deleteAnimal(id);
      res.send(responseDelete);
    } catch (error) {
      handleHttpError(res, "ERROR_DELETE_ANIMAL", error);
    }
  }
}
