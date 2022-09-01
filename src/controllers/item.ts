import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

export class ItemController {
  constructor() {}

  public async getItems(req: Request, res: Response): Promise<void> {
    try {
      res.send({ message: "Hello World!", data: ["AQUA", "BANANA", "CHERRY"] });
    } catch (error) {
      handleHttpError(res, "ERROR_GET_ITEMS");
    }
  }

  public async getItem(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      res.send({
        message: "Hello World!",
        data: ["AQUA", "BANANA", "CHERRY"][id],
      });
    } catch (error) {
      handleHttpError(res, "ERROR_GET_ITEM");
    }
  }

  public async createItem(req: Request, res: Response): Promise<void> {
    try {
      res.send(req.body);
    } catch (error) {
      handleHttpError(res, "ERROR_CREATE_ITEM");
    }
  }

  public async updateItem(req: Request, res: Response): Promise<void> {
    try {
      res.send({ message: "Hello World!", data: ["AQUA", "BANANA", "CHERRY"] });
    } catch (error) {
      handleHttpError(res, "ERROR_UPDATE_ITEM");
    }
  }

  public async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      res.send({ message: "Hello World!", data: ["AQUA", "BANANA", "CHERRY"] });
    } catch (error) {
      handleHttpError(res, "ERROR_DELETE_ITEM");
    }
  }
}
