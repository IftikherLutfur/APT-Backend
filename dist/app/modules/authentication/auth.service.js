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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const model_1 = require("../../model/model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserToken_1 = require("../../utils/createUserToken");
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload, rest = __rest(payload, ["email", "password"]);
    const isUserExist = yield model_1.User.findOne({ email }).select("+password");
    if (!isUserExist) {
        throw new Error("User is not exist");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(password, isUserExist.password);
    if (!isPasswordMatch) {
        throw new Error("Incorrect password");
    }
    const plainUser = isUserExist.toObject();
    const userToken = (0, createUserToken_1.createUserToken)(plainUser);
    const { name, email: userEmail, phone, role } = isUserExist;
    return {
        accessToken: userToken,
        user: {
            name,
            email: userEmail,
            phone,
            role: role
        }
    };
});
exports.authService = {
    login,
};
