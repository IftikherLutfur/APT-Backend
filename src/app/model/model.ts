import mongoose, { model, Schema } from "mongoose";
import { IBlog, IProject, IUser, Role, UpdateBlog } from "../interface/interface";

export const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: [String] },
    technology: { type: [String], required: false }
},
    {
        versionKey: false,
        timestamps: true
    }
)

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER,
        validate: {
            validator: function (value: Role) {
                return [Role.USER, Role.ADMIN].includes(value)
            }, message: "Role must be user or emails"
        }
    },
    password: {
        type: String, required: true,
        validate: {
            validator: function (value) {
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

export const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: false },
    tags: { type: [String], required: false, default: [] },
    image: { type: String, require: true }
},
    {
        versionKey: false,
        timestamps: true,
    }
)
export const blogUpdateSchema = new Schema<UpdateBlog>({
    title: { type: String, required: false },
    description: { type: String, required: false },
    tags: { type: [String], required: false, default: [] }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

export const Project = model<IProject>("Project", projectSchema)
export const User = model<IUser>("User", userSchema)
export const Blog = model<IBlog>("Blog", blogSchema)
