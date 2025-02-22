import mongoose from 'mongoose';
import todoModels from '../models/Todomodels.js'

export const addTodo = async(req, res)=>{
   try {
    const {text} = req.body;
    if(!text)
        return res.status(400).json({Error:'Please give input First'})
    const oneTodo = await todoModels.create({text})
    // await todoModels.save()
    res.status(201).json({Success: 'One todo add in Databse.', AddedText: oneTodo})
    
   } catch (error) {
     res.status(500).json({Error: 'Server Error while adding todo', error})
   }
}


export const allTodos = async(req, res)=>{
  try {
   const todoId = req.params.id
  const todos = await todoModels.find();
  if(!todos)
   return res.status(404).json({Failure: 'no todo found'})
 res.status(200).json({Success: 'todo List', todos})
  } catch (error) {
     res.status(500).json({Failure:'server Error'})
  }

}

export const deleteTodo = async(req, res)=>{
    try{
       const todoId = req.params.id;
       if(!mongoose.Types.ObjectId.isValid(todoId))
        return res.status(400).json({Error:'Invalid todoId _id in url'})
      
      const deleteTodo = await todoModels.findOneAndDelete({_id:todoId})
      if(!deleteTodo)
        return res.status(404).json({Failure: 'todo not Available'})

       return res.status(200).json({Success: 'Todo deleted Succesfully', deleteTodo})

      
    }catch(error){
       res.status(500).json({Failure:"serverError", error})
    }
}

// find todo by id

export const findTodo = async(req,res)=>{
    try {
      const todoId = req.params.id
      if(!mongoose.Types.ObjectId.isValid(todoId))
        return res.status(400).json({Failure: 'not Valid product or invalid _id'})
      
      const todo = await todoModels.findOne({_id:todoId})
      res.status(200).json({Success: 'the find todo is ', todo})
    } catch (error) {
      res.status(500).json({Failure: 'server error', error})
    }
}

export const updateTodo = async(req,res)=>{
  try {
    const todoId = req.params.id
    const {Text} = req.body
    if(!mongoose.Types.ObjectId.isValid(todoId))
      return res.status(400).json({Failure: 'this is not valid todoId'})
    if(!Text)
      return res.status(400).json({Failure: 'please enter updated value first'})
    const updatedTodo = await todoModels.findOneAndUpdate({_id:todoId }, {text:Text},{new:true})
    if(!updatedTodo)
      return res.status(404).json({Failure: 'todo not Available'})

    res.status(200).json({Succes:'updated todo', updatedTodo})
    
  } catch (error) {
    res.status(500).json({Failure: 'server error', error})

  }
}