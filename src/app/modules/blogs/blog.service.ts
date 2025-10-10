import { IBlog } from "../../interface/interface";
import { Blog } from "../../model/model";

const blogPost = async (payload: IBlog) => {
    const { title, description, author, tags } = payload;
    const post = await Blog.create({
        title,
        description,
        author,
        tags
    })
    return post;
}

const getBlog = async () => {
    const findAll = await Blog.find()
    return findAll
}

const blogById = async (id: string) => {
    const findSingle = await Blog.findById({ _id: id })
    return findSingle
}
const updateBlog = async (payload: IBlog, id: string) => {
    const updateData = {
        title: payload.title,
        description: payload.description,
        tags: payload.tags,
        author: payload.author,
        image: payload.image
    }
    const updateBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true })
    return updateBlog
}

const blogDelete = async(id:string)=>{
    const dataDelete = await Blog.deleteOne({_id:id})
    return dataDelete;
}


export const blogService = {
    blogPost,
    getBlog,
    blogById,
    updateBlog,
    blogDelete
}