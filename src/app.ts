import express, { Request, Response } from "express";
import { projectRouter } from "./app/modules/project/project.routes";
import { userRoute } from "./app/modules/User/user.route";

const app = express();
app.use(express.json())
app.use("/project", projectRouter)
app.use("/user", userRoute)

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({message:"TypeScript + Node.js + Mongodb"})
})

export default app;