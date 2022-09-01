import "dotenv/config";
import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV || "development";

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/api-rest-ts";

const dbConnection = async (): Promise<void> => {
  await connect(MONGO_URI);
};

export default dbConnection;
