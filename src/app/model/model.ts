import mongoose, { model, Schema } from "mongoose";
import { IProject, IUser } from "../interface/interface";

export const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    technology: { type: [String], default: [] }
},
    {
        versionKey: false,
        timestamps: true
    }
)

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true,
        validate:{
            validator: function(value){
                return typeof value === "string"
            },
            message: "Password must be string"
        }
    },
    phone: { type: String, required: false }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

export const Project = model<IProject>('Project', projectSchema)
export const User = model<IUser>("User", userSchema)