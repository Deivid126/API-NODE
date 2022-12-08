import { Schema, model } from "mongoose";

interface IUser{
    nome:string;
    email:string;
    senha:string;
    nivel_permisao:string;
}

const userSchema = new Schema<IUser>({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    senha:{type:String,required:true},
    nivel_permisao:{type:String,required:true, default:"USER"},
},
{
    timestamps:true,
});

const User = model<IUser>("User", userSchema);

export default User;

