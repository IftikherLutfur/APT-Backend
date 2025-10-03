import mongoose, { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

export const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    technology: { type: [String], default:[] }
},
    {
        versionKey: false,
        timestamps: true
    }
)
export const Project = model<IProject>('project', projectSchema)