import { Router } from "express";
import { checkPermit } from "../../middleware/checkPermit";
import { Role } from "../../interface/interface";
import { blogController } from "./blog.controller";

const blog = Router()

blog.post("/", blogController.blogPost)
blog.get("/", blogController.getBlog)
blog.get("/:id", blogController.blogById)
blog.patch("/:id", blogController.updateBlog)
blog.delete("/:id", blogController.deleteBlog)

export const blogRouter = blog;