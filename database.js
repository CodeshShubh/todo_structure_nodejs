import mongoose from "mongoose";

export const database = (URI)=>{
mongoose.connect(URI).then(()=>{
    console.log(`Database is connected on : ${URI}`)
}).catch((err)=>{
    console.log(`Error:`, err)
})
}