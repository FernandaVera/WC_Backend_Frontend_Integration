import express, { Router } from "express";
import list from "../controllers/list";
import findById from "../controllers/findById";
import create from "../controllers/create";
import del from "../controllers/delete";
import update from "../controllers/update";
import todoSchemaValidator from "../middlewares/TodoValidator";
const router: Router = express.Router();

router.get('/list', list);
router.get('/find/:id', findById);
router.post('/create', [todoSchemaValidator], create);
router.delete('/delete/:id', del);
router.put('/update', [todoSchemaValidator], update);

export default router;