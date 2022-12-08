import {Request, Response} from 'express';
import User from "../models";
const Controller = {
    async create(req:Request,res:Response){
        const {nome,email,senha} = req.body;

        const newUser = await User.create({
            nome,
            email,
            senha
        });
        return res.status(201).json(newUser);
    },
    async findAll(req:Request,res:Response){
        const users = await User.find();

        return res.json(users);
    },
    async findOne(req:Request,res:Response){
        const {id} = req.params;

        const user = await User.findById(id);

        return res.json(user);
    },
    async delete(req:Request,res:Response){
        const {id} = req.params;

         await User.findByIdAndDelete(id);


        return res.sendStatus(204);

    },
    async uptade(req:Request,res:Response){
        const {id} = req.params;
        const {nome,email,senha} = req.body;

        await User.updateOne({
            _id : id
        },
        {
            $set:{
                nome,
                email,
                senha
            }
        })

        return res.sendStatus(204);
    }
}

export default Controller;