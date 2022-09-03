import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      allowNull: true,
      default: "No description provided",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel: Model<User> = model("User", UserSchema);

export default UserModel;
