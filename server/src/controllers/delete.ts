import { Request, Response } from "express";
import { todos } from "../fakeData/todos.json";

export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index: number = todos.findIndex(u => u.id === id);
    
    if (index < 0) {
        return res.sendStatus(404);
    }
    
    todos.splice(index, 1);
    res.status(200).json(todos);
};