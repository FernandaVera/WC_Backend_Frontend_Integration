import { Request, Response } from "express";
import { todos } from "../fakeData/todos.json";

export default (req: Request, res: Response) => {
    res.status(200).json(todos);
};