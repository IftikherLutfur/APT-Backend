import { Request, Response } from "express";
import { authService } from "./auth.service";
import { createUserToken } from "../../utils/createUserToken";
import { IUser } from "../../interface/interface";
import { setCookie } from "../../utils/setCookie";

const login = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { accessToken, user } = await authService.login(body);
        setCookie(res, accessToken);
        res.send({
            success: true,
            status: 200,
            message: "Login successful",
            accessToken,
            user
        })

    } catch (error) {
        console.log(error)
    }
}

const logout = async(req:Request, res:Response) =>{
    try {
       res.clearCookie("accessToken",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
       })
        res.send({
            success:true,
            message:"User loged out",
            status: 200
        })
    } catch (error) {
     console.log(error)   
    }
}

export const authController = {
    login,
    logout
}