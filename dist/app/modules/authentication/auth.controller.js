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
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const setCookie_1 = require("../../utils/setCookie");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { accessToken, user } = yield auth_service_1.authService.login(body);
        (0, setCookie_1.setCookie)(res, accessToken);
        res.send({
            success: true,
            status: 200,
            message: "Login successful",
            accessToken,
            user
        });
    }
    catch (error) {
        console.log(error);
    }
});
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        res.send({
            success: true,
            message: "User loged out",
            status: 200
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.authController = {
    login,
    logout
};
