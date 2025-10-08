import express, { Request, Response } from "express";
import { projectRouter } from "./app/modules/project/project.routes";
import { userRoute } from "./app/modules/User/user.route";
import cookieParser from "cookie-parser";
import { authRouter } from "./app/modules/authentication/auth.route";
import { blogRouter } from "./app/modules/blogs/blog.route";
import cors from "cors"


const app = express();
app.use(cors({
  origin: ["http://localhost:3000"], // change this to your frontend URL
  credentials: true, // allows sending cookies (important for auth)
}));
app.use(express.json())
app.use(cookieParser())
app.use("/project", projectRouter)
app.use("/user", userRoute)
app.use("/auth", authRouter)
app.use("/blog", blogRouter)

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({message:"TypeScript + Node.js + Mongodb"})
})

export default app;