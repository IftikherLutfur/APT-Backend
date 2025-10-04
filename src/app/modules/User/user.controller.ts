import { Request, Response } from "express";
import { userService } from "./user.service";

const userCreate = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const sendUserData = await userService.createUser(body)
        res.send({
            success: true,
            message: "User has created successfully",
            status: 200,
            data: sendUserData
        })
    } catch (error: any) {
        res.send({
            success: false,
            message: error?.message,
            status: 500,
        })
        // console.log(error)
    }
}

const getALl = async (req: Request, res: Response) => {
    try {
        const users = await userService.getALlUser();
        res.send({
            success: true,
            message: "All user retrived",
            status: 200,
            data: users,
        })
    } catch (error: any) {
        res.send({
            success: false,
            message: error?.message,
            status: 404,
        })
    }
}

export const userController = {
    userCreate,
    getALl
}