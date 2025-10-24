"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = exports.User = exports.Project = exports.blogUpdateSchema = exports.blogSchema = exports.userSchema = exports.projectSchema = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("../interface/interface");
exports.projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: [String] },
    technology: { type: [String], required: false },
    liveLink: { typre: String },
    frontendGithubLink: { typre: String },
    backendGithubLink: { typre: String },
}, {
    versionKey: false,
    timestamps: true
});
exports.userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: Object.values(interface_1.Role),
        default: interface_1.Role.USER,
        validate: {
            validator: function (value) {
                return [interface_1.Role.USER, interface_1.Role.ADMIN].includes(value);
            }, message: "Role must be user or emails"
        }
    },
    password: {
        type: String, required: true,
        validate: {
            validator: function (value) {
                return typeof value === "string";
            },
            message: "Password must be string"
        }
    },
    phone: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true,
});
exports.blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: false },
    tags: { type: [String], required: false, default: [] },
    image: { type: String, require: true }
}, {
    versionKey: false,
    timestamps: true,
});
exports.blogUpdateSchema = new mongoose_1.Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    tags: { type: [String], required: false, default: [] }
}, {
    versionKey: false,
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)("Project", exports.projectSchema);
exports.User = (0, mongoose_1.model)("User", exports.userSchema);
exports.Blog = (0, mongoose_1.model)("Blog", exports.blogSchema);
