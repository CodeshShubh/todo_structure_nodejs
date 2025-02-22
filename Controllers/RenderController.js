import mongoose from 'mongoose';
import todoModels from '../models/Todomodels.js'

export const addTodo = async(req, res)=>{
   try {
    const {text} = req.body;
    if(!text)
        return res.status(400).json({Error:'Please give input First'})
    const oneTodo = await todoModels.create({text})
    console.log('Todo Added:', oneTodo);
    // await todoModels.save()
    // res.status(201).json({Success: 'One todo add in Databse.', AddedText: oneTodo})
   // Redirect to the home page to refresh the list
   res.redirect('/');
    
   } catch (error) {
     res.status(500).json({Error: 'Server Error while adding todo', error})
   }
}



export const render = async(req,res)=>{
    const allTodos = await todoModels.find({})
    return res.render('home', {allTodos})
}