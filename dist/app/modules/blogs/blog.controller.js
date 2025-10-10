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
exports.blogController = void 0;
const blog_service_1 = require("./blog.service");
const blogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const post = yield blog_service_1.blogService.blogPost(body);
        res.send({
            success: true,
            status: 200,
            message: "Blog has posted successfully",
            data: post
        });
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong", error });
    }
});
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const get = yield blog_service_1.blogService.getBlog();
        res.send({
            success: true,
            status: 200,
            message: "All blog retrived successfully",
            data: get
        });
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong", error });
    }
});
const blogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const getIndividualBlog = yield blog_service_1.blogService.blogById(id);
        res.send({
            success: true,
            message: "Single blog retrived successfully",
            status: 200,
            data: getIndividualBlog
        });
    }
    catch (error) {
        res.status(500).send({ message: "Single blog retrived failed", error });
    }
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const id = req.params.id;
        const update = yield blog_service_1.blogService.updateBlog(body, id);
        res.send({
            succes: true,
            message: "Blog's data has been updated",
            status: 200,
            data: update
        });
    }
    catch (error) {
        res.status(500).send({ message: "Blog update failed", error });
    }
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteBlog = yield blog_service_1.blogService.blogDelete(id);
        res.send({
            success: true,
            message: "Blog has deleted successfully",
            status: 200,
            data: null
        });
    }
    catch (error) {
    }
});
exports.blogController = {
    blogPost,
    getBlog,
    blogById,
    updateBlog,
    deleteBlog
};
