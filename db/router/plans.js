const express = require("express");
const Plan = require("../modals/plan");
const Router = express.Router();

// Create
Router.post("/plans/",(req,res)=>{
    const newPlan = new Plan(req.body)
    newPlan.save()
    .then(()=>{
        res.status(201).send("new plan is added")
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

// Get by Mobile number
Router.get("/plans/:mobile",(req,res)=>{
    Plan.find({Mobile:req.params.mobile})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

// delete
Router.delete("/plans/:id",(req,res)=>{
    Plan.findByIdAndDelete({_id : req.params.id})
    .then(()=>{
        res.status(200).send("Plan is deleted");
    })
    .catch((err)=> {
    console.error(err);
    res.status(400).send(err.message);
})
})

module.exports = Router;
