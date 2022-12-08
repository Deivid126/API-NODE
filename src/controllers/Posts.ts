import { Request,Response } from "express";
import Post from "../models/Post";

const ControllerPost = {
    async create(req:Request,res:Response){

        const {user,conteudo} = req.body;

        const newPost = await Post.create({
            user,
            conteudo,
        });

       return res.status(201).json(newPost);
    },
    async findAll(req:Request,res:Response){
        const posts = await Post.find().populate({
            path:"user",
            select:'nome'
        });

        return res.json(posts);
    }
}

export default ControllerPost;

