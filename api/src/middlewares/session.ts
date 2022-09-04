import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handler";
import "dotenv/config";
import { User } from "../interfaces/user.interface";
import { JwtPayload } from "jsonwebtoken";
import { ExtendedRequest } from "../interfaces/extResponse.interface";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const checkJWT = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token: string | null =
      req.headers.authorization?.split(" ").pop() || null;
    if (!token) return res.send({ message: "No token provided" });
    const isValid = verifyToken(token);
    if (!isValid) return res.status(401).json({ message: "Invalid token" });
    console.log("JWT MIDDLEWARE");
    next();
    req.user = isValid as { id: string } | JwtPayload;
  } catch (error) {
    res.send(401).json({ message: "JWT_CHECKER_ERROR" });
  }
};

export { checkJWT };
