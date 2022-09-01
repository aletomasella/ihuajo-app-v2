import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello World!", data: ["AQUA", "BANANA", "CHERRY"] });
});

export { router };
