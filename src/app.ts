import express, { Request, Response } from "express";
const app = express();


app.get("/", (req: Request, res: Response) => {
    res.status(200).send({message:"TypeScript + Node.js + Mongodb"})
})

export default app;