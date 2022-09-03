import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { comparePassword, encrypt } from "../utils/bscrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkUser = await UserModel.findOne({ email });
  if (checkUser) return { message: "User already exists" };
  const passwordHash = await encrypt(password);
  const newUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
  });
  return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return { message: "User not found" };
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) return { message: "Password is incorrect" };
  const token = generateToken(user.email);

  return { token, message: "Login success", user };
};

export { registerNewUser, loginUser };
