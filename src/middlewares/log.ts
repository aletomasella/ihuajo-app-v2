import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("LOG MIDDLEWARE");
  next();
};

export { logMiddleware };
