import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { handleHttpError } from "../utils/error.handle";

class AuthController {
  constructor() {}

  public async login(req: Request, res: Response) {
    try {
      const { user } = req.body;
      const responseLogin = await loginUser(user);
      res.send(responseLogin);
    } catch (error) {
      handleHttpError(res, "ERROR_LOGIN", error);
    }
  }

  public async register(req: Request, res: Response) {
    try {
      const { user } = req.body;
      const responseRegister = await registerNewUser(user);
      res.send(responseRegister);
    } catch (error) {
      handleHttpError(res, "ERROR_REGISTER", error);
    }
  }
}

export default AuthController;
