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
exports.projectService = void 0;
const model_1 = require("../../model/model");
const getProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield model_1.Project.find().sort({ createdAt: -1 });
    return project;
});
const postProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield model_1.Project.create({
        title: payload.title,
        description: payload.description,
        image: payload.image,
        technology: payload.technology,
    });
    return post;
});
const getSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dataFindById = yield model_1.Project.findById({ _id: id });
    return dataFindById;
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = {
        title: payload.title,
        description: payload.description,
        technology: payload.technology,
        image: payload.image
    };
    const project = yield model_1.Project.findByIdAndUpdate(id, updateData, { new: true });
    return project;
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteData = yield model_1.Project.findByIdAndDelete({ _id: id });
    return deleteData;
});
exports.projectService = {
    getProject,
    postProject,
    getSingleData,
    updateProject,
    deleteProject
};
