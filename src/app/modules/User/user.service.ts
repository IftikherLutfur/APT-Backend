import { IUser } from "../../interface/interface"
import { User } from "../../model/model"
import dotenv from "dotenv"
import bcrypt from "bcrypt"

dotenv.config();

const createUser = async (payload: IUser) => {
    const { email, password, ...rest } = payload;
    const isUserExist = await User.findOne({email})
    if(isUserExist){
        throw new Error("This email already taken")
    }
    const hashedPassword = await bcrypt.hash(password as string, Number(process.env.BCRYPT_SALT_ROUND))

    const create = await User.create({
        email,
        password: hashedPassword,
        ...rest
    })
    return create;
}

const getALlUser = async () =>{
    const getAll = await User.find();
    return getAll;
}
export const userService = {
    createUser,
    getALlUser
}