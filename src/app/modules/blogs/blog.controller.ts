import { Request, Response } from "express";
import { blogService } from "./blog.service";

const blogPost = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const post = await blogService.blogPost(body)
        res.send({
            success: true,
            status: 200,
            message: "Blog has posted successfully",
            data: post
        })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong", error })
    }
}

const getBlog = async (req: Request, res: Response) => {
    try {
        const get = await blogService.getBlog()
        res.send({
            success: true,
            status: 200,
            message: "All blog retrived successfully",
            data: get
        })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong", error })
    }
}

const blogById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const getIndividualBlog = await blogService.blogById(id)
        res.send({
            success: true,
            message: "Single blog retrived successfully",
            status: 200,
            data: getIndividualBlog
        })
    } catch (error) {
        res.status(500).send({ message: "Single blog retrived failed", error })
    }
}

const updateBlog = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const id = req.params.id;
        const update = await blogService.updateBlog(body, id)
        res.send({
            succes: true,
            message: "Blog's data has been updated",
            status: 200,
            data: update
        })
    } catch (error) {
    res.status(500).send({message:"Blog update failed", error})
    }
}

const deleteBlog = async(req:Request,res:Response) =>{
    try {
        const id = req.params.id
        const deleteBlog = await blogService.blogDelete(id)
        res.send({
            success:true,
            message:"Blog has deleted successfully",
            status:200,
            data: null
        })
    } catch (error) {
        
    }
}

export const blogController = {
    blogPost,
    getBlog,
    blogById,
    updateBlog,
    deleteBlog
}