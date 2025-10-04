import { Router } from "express";
import { userController } from "./user.controller";

const user = Router()
user.get("/", userController.getALl)
user.post("/", userController.userCreate)
export const userRoute = user;