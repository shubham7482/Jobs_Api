import  Express from "express";
import schema from "../Models/Schema.js";
const router=Express.Router()
router.post('/Router',async(req,res)=>{
    console.log(req.body)
    const part=new schema(req.body)
    const postman=await part.save()
    res.status(201).send(postman)
    router.get('/Route/:id',async(req,res)=>{
        try{
            const _id=req.params.id
            const GetJob=await schema.findById(_id)
            res.send(GetJob)
        }catch(error){
            res.status(400).send(error)
            
        }
    })
    router.patch('/Route/:id',async(req,res)=>{
        try{
            const _id=req.params.id
            const partial=await schema.findByIdAndUpdate(_id,res.send,{
                new:true
            })
            res.send(partial)
        }catch(error){
            res.status(500).send(error)
        }
    })
    router.delete('/Route/:id',async(req,res)=>{
        try{
            const _id=req.params.id
            const dell=await schema.findByIdAndDelete(_id)
            res.send(dell)

        }catch(error){
            res.status(500).send(error)
        }
    })

})
export default router