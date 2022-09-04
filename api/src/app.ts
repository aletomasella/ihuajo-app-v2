import express from "express";
import cors from "cors";
import "dotenv/config";
import Routes from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "BIENVENIDO A MI API PARA EL PROYECTO DE IHUAJO S.R.L.",
  });
});

app.use("/", Routes);

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

db().then(() => console.log("Conectado a MongoDB"));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
