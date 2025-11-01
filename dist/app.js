"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_routes_1 = require("./app/modules/project/project.routes");
const user_route_1 = require("./app/modules/User/user.route");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_route_1 = require("./app/modules/authentication/auth.route");
const blog_route_1 = require("./app/modules/blogs/blog.route");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["https://portfolio-of-abdullah-iota.vercel.app"],
    // origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/project", project_routes_1.projectRouter);
app.use("/user", user_route_1.userRoute);
app.use("/auth", auth_route_1.authRouter);
app.use("/blog", blog_route_1.blogRouter);
app.get("/", (req, res) => {
    res.status(200).send({ message: "TypeScript + Node.js + Mongodb" });
});
exports.default = app;
