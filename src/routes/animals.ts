import { Router, Request, Response } from "express";
import { AnimalsController } from "../controllers/animals";

const router = Router();

const itemsController = new AnimalsController();

router.get("/", itemsController.getAnimals);

router.post("/", itemsController.createAnimal);

router.get("/:id", itemsController.getAnimal);

router.put("/:id", itemsController.updateAnimal);

router.delete("/:id", itemsController.deleteAnimal);

export { router };
