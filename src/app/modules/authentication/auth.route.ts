import { Router } from "express";
import { authController } from "./auth.controller";

const auth = Router()

auth.post("/login", authController.login)

export const authRouter = auth;