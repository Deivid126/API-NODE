import { Schema, model, Types} from "mongoose";

interface IPost{
   user:Types.ObjectId[],
   conteudo: string;

}
const postSchema = new Schema<IPost>({
    user:[{type:Schema.Types.ObjectId,required:true,ref:"User"}],
    conteudo:{type:String,required:true}
},
{
    timestamps:true,
});

const Post = model<IPost>("Post", postSchema);

export default Post;

