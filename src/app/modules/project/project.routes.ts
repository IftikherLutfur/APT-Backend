import { Router } from "express";
import { projectController } from "./project.controller";
import { checkPermit } from "../../middleware/checkPermit";
import { Role } from "../../interface/interface";

const router = Router()

router.get("/", projectController.getProject)
router.post("/", checkPermit(Role.ADMIN), projectController.postProject)
router.get("/:id", projectController.getSingleProject)
router.patch("/:id",checkPermit(Role.ADMIN), projectController.updateProject)
router.delete("/:id", checkPermit(Role.ADMIN),projectController.deleteProject)

export const projectRouter = router;