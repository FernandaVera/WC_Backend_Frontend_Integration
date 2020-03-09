import express, { Router } from "express";
import list from "../controllers/list";
import create from "../controllers/create";
import del from "../controllers/delete";
import todoSchemaValidator from "../middlewares/TodoValidator";
const router: Router = express.Router();

router.get('/list', list);
router.post('/create', [todoSchemaValidator], create);
router.delete('/delete/:id', del);

export default router;