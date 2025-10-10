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
exports.blogService = void 0;
const model_1 = require("../../model/model");
const blogPost = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, author, tags } = payload;
    const post = yield model_1.Blog.create({
        title,
        description,
        author,
        tags
    });
    return post;
});
const getBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const findAll = yield model_1.Blog.find();
    return findAll;
});
const blogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findSingle = yield model_1.Blog.findById({ _id: id });
    return findSingle;
});
const updateBlog = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = {
        title: payload.title,
        description: payload.description,
        tags: payload.tags,
        author: payload.author,
        image: payload.image
    };
    const updateBlog = yield model_1.Blog.findByIdAndUpdate(id, updateData, { new: true });
    return updateBlog;
});
const blogDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dataDelete = yield model_1.Blog.deleteOne({ _id: id });
    return dataDelete;
});
exports.blogService = {
    blogPost,
    getBlog,
    blogById,
    updateBlog,
    blogDelete
};
