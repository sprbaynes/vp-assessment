import {Request, Response} from 'express';

export default function (req: Request, res: Response){
    return res.json({message:"hello world!"})
}