import { Router } from "express";
import { userController } from "./user.controller";
import { checkPermit } from "../../middleware/checkPermit";
import { Role } from "../../interface/interface";

const user = Router()

user.get("/", checkPermit(Role.ADMIN), userController.getALl)
user.post("/", userController.userCreate)
user.delete("/:id", checkPermit(Role.ADMIN), userController.deleteUser)

export const userRoute = user;