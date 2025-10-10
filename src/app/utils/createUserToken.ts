import { IUser } from "../interface/interface";
import { genertateToken, MyJwtPayload } from "./jwt";

export function createUserToken(user: Partial<IUser>) {
   if (!user._id || !user.email) {
      throw new Error("User id & email required to generate token")
   }
   if (!user.role) {
      throw new Error("User role required to generate token")
   }
   const JwtPayload: MyJwtPayload = {
      userId: typeof user._id === "string" ? user._id : user._id.toString(),
      email: user.email,
      role: user.role
   };
   const accessToken = genertateToken(JwtPayload, process.env.ACCESS_TOKEN as string, process.env.TOKEN_EXPIRE as string);
   return accessToken;

}