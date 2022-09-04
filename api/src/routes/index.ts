import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.split(".")[0];
};

readdirSync(PATH_ROUTER).forEach((file) => {
  const fileName = cleanFileName(file);
  if (fileName !== "index") {
    import(`./${fileName}`).then((module) => {
      router.use(`/${fileName}`, module.router);
    });
  }
});

export default router;
