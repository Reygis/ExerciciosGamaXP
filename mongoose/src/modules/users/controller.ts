import { Request, Response } from "express";
import { User } from "../../models";

export class Controller {

    static create = async (req: Request, res: Response) => {
        const { nome, email, senha, descricao } = req.body;
        try {
            const newUser = await User.create({ nome, email, senha, descricao })
            return res.status(201).json(newUser);
        } catch (error: any) {
            return res.status(400).json(error.message)
        }

    };

    static findAll = async (req: Request, res: Response) => {
        const users = await User.find()
        return res.json(users)
    };

    static findOne = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const user = await User.findOne({ _id: id });
            if (!user) return res.status(404).json("user não encontrado");
            return res.json(user);
        } catch (error: any) {
            return res.status(400).json(error.message)
        }
    };

    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, email } = req.body;
        try {
            const updated = await User.updateOne({
                _id: id,
            }, {
                $set: {
                    nome,
                    email
                },
            }
            );
            if (updated.modifiedCount === 0) return res.status(404).json("user não encontrado");
            return res.sendStatus(204)
        } catch (error:any) {
            return res.status(400).json(error.message)            
        }
    };

    static delete = async (req: Request, res: Response) => { 
        const {id} = req.params;
        try {
            await User.findByIdAndDelete(id);
            return res.sendStatus(204)
        } catch (error:any) {
            return res.send(400).json(error.message)
        }
    };

}