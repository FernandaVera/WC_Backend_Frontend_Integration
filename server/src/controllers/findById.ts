import { Request, Response } from "express";
import { todos } from "../fakeData/todos.json";
import { Todo } from "../models/Todo";

export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const todo: Todo = todos.find(u => u.id === id);

    if (!todo) {
        return res.sendStatus(404);
    }
    
    res.status(200).json(todo);
};