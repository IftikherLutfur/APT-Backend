import { Response } from "express";

export const setCookie = (res: Response, accessToken: string) =>{
    res.cookie("accessToken", accessToken ,{
         httpOnly:true,
         secure:true,
         sameSite:"none",
    })
}