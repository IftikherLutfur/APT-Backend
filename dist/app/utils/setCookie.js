"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
const setCookie = (res, accessToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
};
exports.setCookie = setCookie;
