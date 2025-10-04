import { Router } from "express";
import { checkPermit } from "../../middleware/checkPermit";
import { Role } from "../../interface/interface";
import { blogController } from "./blog.controller";

const blog = Router()

blog.post("/", checkPermit(Role.ADMIN), blogController.blogPost)
blog.get("/", blogController.getBlog)
blog.get("/:id", blogController.blogById)
blog.patch("/:id",checkPermit(Role.ADMIN), blogController.updateBlog)
blog.delete("/:id",checkPermit(Role.ADMIN), blogController.deleteBlog)

export const blogRouter = blog;