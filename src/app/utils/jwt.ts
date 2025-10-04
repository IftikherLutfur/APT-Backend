import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"

export interface MyJwtPayload extends JwtPayload {
    userId: string;
    email?: string;
}
export const genertateToken = (
    payload: MyJwtPayload,
    sercet: string,
    expiresIn: string
) => {
    return jwt.sign(payload, sercet, {
        expiresIn,
    } as SignOptions)
}

export const verifyToken = (token:string, secret: string): MyJwtPayload =>{
    return jwt.verify(token,secret) as MyJwtPayload;
}