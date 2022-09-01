import { Router, Request, Response } from "express";
import { ItemController } from "../controllers/item";

const router = Router();

const itemsController = new ItemController();

router.get("/", itemsController.getItems);

router.post("/", itemsController.createItem);

router.get("/:id", itemsController.getItem);

export { router };
