import { Router } from "express";
import { authController } from "./auth.controller";

const auth = Router()

auth.post("/login", authController.login)
auth.post("/logout", authController.logout)

export const authRouter = auth;