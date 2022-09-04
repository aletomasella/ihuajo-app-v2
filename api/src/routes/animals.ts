import { Router, Request, Response } from "express";
import { AnimalsController } from "../controllers/animals";
import { checkJWT } from "../middlewares/session";

const router = Router();

const itemsController = new AnimalsController();

router.get("/", itemsController.getAnimals);

router.get("/query", itemsController.getAnimalsByQuery);

router.post("/", itemsController.createAnimal);

router.get("/:id", itemsController.getAnimal);

router.put("/:id", itemsController.updateAnimal);

router.delete("/:id", itemsController.deleteAnimal);

export { router };
