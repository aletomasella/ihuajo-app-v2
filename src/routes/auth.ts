import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth";

const authController = new AuthController();

const router = Router();

router.post("/login", authController.login);

router.post("/register", authController.register);

export { router };
