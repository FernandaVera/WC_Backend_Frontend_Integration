import { Request, Response } from "express";
import { Todo } from "../models/Todo";
import { todos } from "../fakeData/todos.json";

export default (req: Request, res: Response) => {
    const todo: Todo = req.body;
    const index: number = todos.findIndex(u => u.id === todo.id);
    
    if (index < 0) {
        return res.sendStatus(404);
    }
    
    todos.splice(index, 1, todo)
    res.status(200).json(todo);
};