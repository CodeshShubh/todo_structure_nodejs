import express from 'express';
import { addTodo, allTodos, deleteTodo, findTodo, updateTodo } from '../Controllers/todoController.js';

const router = express.Router();

router.post('/add', addTodo)
.get('/todos',allTodos )
.get('/todo/:id', findTodo)
.put('/update/todo/:id', updateTodo)
.delete('/delete/:id', deleteTodo)


export default router