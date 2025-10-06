"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserToken = createUserToken;
const jwt_1 = require("./jwt");
function createUserToken(user) {
    if (!user._id || !user.email) {
        throw new Error("User id & email required to generate token");
    }
    if (!user.role) {
        throw new Error("User role required to generate token");
    }
    const JwtPayload = {
        userId: typeof user._id === "string" ? user._id : user._id.toString(),
        email: user.email,
        role: user.role
    };
    const accessToken = (0, jwt_1.genertateToken)(JwtPayload, process.env.ACCESS_TOKEN, process.env.TOKEN_EXPIRE);
    return accessToken;
}
