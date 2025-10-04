import { IProject } from "../../interface/interface"
import { Project, } from "../../model/model"

const getProject = async () => {
    const project = await Project.find()
    return project
}
const postProject = async (payload: IProject) => {
    const post = await Project.create({
        title: payload.title
    })
    return post
}

const getSingleData = async (id: string) => {
    const dataFindById = await Project.findById({ _id: id })
    return dataFindById;
}

const deleteProject = async (id: string) => {
    const deleteData = await Project.findByIdAndDelete({ _id: id })
    return deleteData;
}

export const projectService = {
    getProject,
    postProject,
    getSingleData,
    deleteProject
}