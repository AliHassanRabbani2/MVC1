  const TaskModel = require("../models/taskModel")


  module.exports.getTask = async(req,res)=>{

    const tasks = await TaskModel.find()
    res.send(tasks)
  }


  module.exports.saveTask = async(req,res)=>{

    const {task} =req.body
    TaskModel.create({task})
    .then((data)=>{
        console.log("save successfully")
        res.status(201).send(data);

    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong"})
    })
  };



module.exports.updateTask = async(req,res)=>{
      
    const{id} = req.params
    const {task} = req.body


    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=>res.send("Update succesfully"))
    .catch((err)=>{
        console.log(err)
        res.send({error:err,msg: "something went wrong"})

    })
}


module.exports.deleteTask= async(req,res)=>{

    const {id} = req.params



    TaskModel.findByIdAndDelete(id)
    .then(()=> res.send("Delete succesfully"))
    .catch((err)=>{
        console.log(err)
        res.send({error:err,msg:"something went wrong"})
    })
}



















