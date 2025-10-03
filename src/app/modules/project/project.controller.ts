import { Request, Response } from "express";
import { projectService } from "./project.service";

const getProject = async (req: Request, res: Response) => {
    const project = await projectService.getProject()
    res.send({
        success: true,
        status:200,
        message: "All the project retrived successfully",
        data: project,
    })
}
import { IProject } from "./project.interface";

const postProject = async (req: Request, res: Response) => {
    try {
        const body: IProject = req.body;
    const project = await projectService.postProject(body);
    res.send({
        success: true,
        status:200,
        message: "Project posted successfully",
        data: project,
    })
    } catch (error) {
        console.log(error)
    };
}
const getSingleProject = async(req:Request, res:Response) =>{
    try {
        const id = req.params.id
        const getSingle = await projectService.getSingleData(id)
        res.send({
            success:true,
            status:200,
            message:"Single project retrived successfully",
            data:getSingle
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = async(req:Request, res:Response) =>{
    try {
        const id = req.params.id
        await projectService.deleteProject(id)
        res.send({
            success:true,
            message:"Project delete has been successfully",
            status: 200,
            data: null
        })
    } catch (error) {
        console.log(error)
    }
}

export const projectController = {
    getProject,
    postProject,
    getSingleProject,
    deleteProject
}