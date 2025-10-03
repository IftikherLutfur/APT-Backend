import { Router } from "express";
import { projectController } from "./project.controller";

const router = Router()

router.get("/", projectController.getProject)
router.post("/", projectController.postProject)
router.get("/:id", projectController.getSingleProject)
router.delete("/:id", projectController.deleteProject)

export const projectRouter = router;