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
exports.userController = void 0;
const user_service_1 = require("./user.service");
const userCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const sendUserData = yield user_service_1.userService.createUser(body);
        res.send({
            success: true,
            message: "User has created successfully",
            status: 200,
            data: sendUserData
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: error === null || error === void 0 ? void 0 : error.message,
            status: 500,
        });
        // console.log(error)
    }
});
const getALl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.userService.getALlUser();
        res.send({
            success: true,
            message: "All user retrived",
            status: 200,
            data: users,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: error === null || error === void 0 ? void 0 : error.message,
            status: 404,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deleteUser = yield user_service_1.userService.deleteUser(id);
    res.send({
        success: true,
        message: "This user has been deleted",
        status: 200,
        data: null
    });
});
exports.userController = {
    userCreate,
    getALl,
    deleteUser
};
