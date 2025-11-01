import { IProject, UpdateBlog, UpdateProject } from "../../interface/interface"
import { Project, } from "../../model/model"

const getProject = async () => {
    const project = await Project.find().sort({ createdAt: -1 })
    return project
}
const postProject = async (payload: IProject) => {
    const post = await Project.create({
        title: payload.title,
        description: payload.description,
        image: payload.image,
        technology: payload.technology,

    })
    return post
}

const getSingleData = async (id: string) => {
    const dataFindById = await Project.findById({ _id: id })
    return dataFindById;
}

const updateProject = async ( id: string, payload: IProject) => {
    const updateData = {
        title: payload.title,
        description: payload.description,
        technology: payload.technology,
        image: payload.image
    };

    const project = await Project.findByIdAndUpdate(
        id,              
        updateData,
        { new: true }      
    );

    return project;
};

const deleteProject = async (id: string) => {
    const deleteData = await Project.findByIdAndDelete({ _id: id })
    return deleteData;
}

export const projectService = {
    getProject,
    postProject,
    getSingleData,
    updateProject,
    deleteProject
}