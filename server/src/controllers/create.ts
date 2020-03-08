import { Request, Response } from "express";
import { Todo } from "../models/Todo";
import { todos } from "../fakeData/todos.json";

export default (req: Request, res: Response) => {
    const todo: Todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
};