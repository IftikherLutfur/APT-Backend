import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/model";

dotenv.config();

interface MyJwtPayload extends JwtPayload {
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: MyJwtPayload;
    }
  }
}

export const checkPermit = (...authRole: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token =
        req.headers.authorization?.split(" ")[1] || req.cookies.accessToken;

      if (!token) {
        return res.status(401).json({ message: "No token received" });
      }

      const verifiedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN as string
      ) as MyJwtPayload;

      const isUserExist = await User.findOne({ email: verifiedToken.email });
      if (!isUserExist) {
        return res.status(404).json({ message: "User does not exist" });
      }

      if (!authRole.includes(verifiedToken.role)) {
        return res.status(403).json({ message: "You are not authorized" });
      }

      req.user = verifiedToken;
      next();
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  };
};
