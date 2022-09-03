import "dotenv/config";
import { sign, verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "30d" });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isValid = verify(jwt, JWT_SECRET);
  return isValid;
};

export { generateToken, verifyToken };
