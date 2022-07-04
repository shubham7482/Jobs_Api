import mongoose from "mongoose";
function Db(){
    if(mongoose.connections[0].readyState){
        console.log('already connect')
        return ""
    }
    mongoose.connect('mongodb://localhost:27017/Models',{
    
    })
    mongoose.connection.on('connected',()=>{
        console.log('connected...')
    })
    mongoose.connection.on('error',(error)=>{
        console.log(error)
    })
}
export default Db