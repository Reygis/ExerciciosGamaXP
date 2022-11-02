import { Request, Response } from "express";
import { Post } from "../../models";

export class Controller {

    static create = async (req: Request, res: Response) => {
        const { user, conteudo } = req.body;
        try {
            const newPost = await Post.create({ user, conteudo })
            return res.status(201).json(newPost);
        } catch (error: any) {
            return res.status(400).json(error.message)
        }

    };

    static findAll = async (req: Request, res: Response) => {
        // const posts= await Post.find().populate("user");
        const posts= await Post.find().populate({
            path: "user",
            select: "nome email",
        });

        return res.json(posts)
    };

   
}