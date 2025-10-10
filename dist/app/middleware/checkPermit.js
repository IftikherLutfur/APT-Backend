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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermit = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const model_1 = require("../model/model");
dotenv_1.default.config();
const checkPermit = (...authRole) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || req.cookies.accessToken;
            if (!token) {
                return res.status(401).json({ message: "No token received" });
            }
            const verifiedToken = jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN);
            const isUserExist = yield model_1.User.findOne({ email: verifiedToken.email });
            if (!isUserExist) {
                return res.status(404).json({ message: "User does not exist" });
            }
            if (!authRole.includes(verifiedToken.role)) {
                return res.status(403).json({ message: "You are not authorized" });
            }
            req.user = verifiedToken;
            next();
        }
        catch (error) {
            return res.status(401).json({ message: error.message });
        }
    });
};
exports.checkPermit = checkPermit;
