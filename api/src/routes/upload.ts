import { Router } from "express";
import UploadController from "../controllers/upload";
import multerMiddleware from "../middlewares/file";
import { checkJWT } from "../middlewares/session";

const router = Router();

const uploadController = new UploadController();

router.post(
  "/",
  checkJWT,
  multerMiddleware.single("myFile"),
  uploadController.upload
);

export { router };
