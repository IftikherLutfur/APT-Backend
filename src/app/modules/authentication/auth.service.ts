import { IUser } from "../../interface/interface";
import { User } from "../../model/model";
import bcrypt from "bcrypt"
import { createUserToken } from "../../utils/createUserToken";


const login = async (payload: IUser) => {
    const { email, password, ...rest } = payload;
    const isUserExist = await User.findOne({ email }).select("+password")
    if (!isUserExist) {
        throw new Error("User is not exist")
    }
    const isPasswordMatch = await bcrypt.compare(password as string, isUserExist.password as string)
    if (!isPasswordMatch) {
        throw new Error("Incorrect password")
    }
    const plainUser = isUserExist.toObject() as IUser;
    const userToken = createUserToken(plainUser)
    const { name, email: userEmail, phone, role } = isUserExist

    return {
        accessToken: userToken,
        user:{
            name,
            email: userEmail,
            phone,
            role: role
        }
    }

}

export const authService = {
    login,
}