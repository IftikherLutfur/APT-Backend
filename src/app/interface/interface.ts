import { Types } from "mongoose";

export interface IProject {
    title:string,
    description?:string,
    technology?: string[],
    image?: string,
}

export enum Role {
    ADMIN="ADMIN",
    USER="USER"
}

export interface IUser {
    _id?: Types.ObjectId
    name?: string;
    role?: Role;
    email?:string;
    password?: string;
    phone?: number;
}