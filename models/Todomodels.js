import mongoose from "mongoose";
const todoSchema = mongoose.Schema


 const todo = todoSchema({
    text: {
        type:String,
        require:true
    }
},{timestamps:true}) 

const Todo = mongoose.model('Todo', todo)
export default Todo