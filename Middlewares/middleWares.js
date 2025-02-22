import fs from 'fs'
export const textLogs =(fileName)=>{
 return (req,res,next)=>{
    fs.appendFile(fileName, `\n ${Date.now()} : ${req.ip}  : ${req.method} : ${req.path}\n  `,(err,result)=>{
        next()
    })
 }
}