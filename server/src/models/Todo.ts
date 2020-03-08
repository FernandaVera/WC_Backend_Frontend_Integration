import joi from '@hapi/joi'

export type Todo = {
    id: string;
    task: string;
}

export const TodoSchema = joi.object().keys({
    id: joi.string().required(),
    task: joi.string().required()
});