import { Router } from "express";
import { projectController } from "./project.controller";
import { checkPermit } from "../../middleware/checkPermit";
import { Role } from "../../interface/interface";

const router = Router()

router.get("/",checkPermit(Role.ADMIN), projectController.getProject)
router.post("/", projectController.postProject)
router.get("/:id", projectController.getSingleProject)
router.delete("/:id", projectController.deleteProject)
export const projectRouter = router;