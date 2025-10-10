"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const project_service_1 = require("./project.service");
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_service_1.projectService.getProject();
    res.send({
        success: true,
        status: 200,
        message: "All the project retrived successfully",
        data: project,
    });
});
const postProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const project = yield project_service_1.projectService.postProject(body);
        res.send({
            success: true,
            status: 200,
            message: "Project posted successfully",
            data: project,
        });
    }
    catch (error) {
        console.log(error);
    }
    ;
});
const getSingleProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const getSingle = yield project_service_1.projectService.getSingleData(id);
        res.send({
            success: true,
            status: 200,
            message: "Single project retrived successfully",
            data: getSingle
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const body = req.body;
        const project = yield project_service_1.projectService.updateProject(id, body);
        res.send({
            success: true,
            message: "Project updated successgully",
            status: 200,
            data: project
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield project_service_1.projectService.deleteProject(id);
        res.send({
            success: true,
            message: "Project delete has been successfully",
            status: 200,
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.projectController = {
    getProject,
    postProject,
    getSingleProject,
    updateProject,
    deleteProject
};
