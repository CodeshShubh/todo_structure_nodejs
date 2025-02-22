import express from 'express';
import { addTodo, render } from '../Controllers/RenderController.js';

const router = express.Router();


router.get('/', render)

router.post('/todos', addTodo)


export default router;