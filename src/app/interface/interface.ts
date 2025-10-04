import { Types } from "mongoose";

export interface IProject {
    title:string,
    description?:string,
    technology?: string[],
    image?: string,
}

export interface IUser {
    _id?: Types.ObjectId
    name?: string;
    email?:string;
    password?: string;
    phone?: number;
}