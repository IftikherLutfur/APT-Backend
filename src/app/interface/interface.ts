export interface IProject {
    title:string,
    description?:string,
    technology?: string[],
    image?: string,
}

export interface IUser {
    name: string;
    email:string;
    password: string;
    phone?: number;
}