import { Request, Response, NextFunction } from "express";
import { Todo, TodoSchema } from "../models/Todo";

export default (req: Request, res: Response, next: NextFunction) => {
    const todo: Todo = req.body;
    const validation = TodoSchema.validate(todo);
    if (validation.error) {
        return res.status(400).json(validation.error.details);
    }

    next();
}