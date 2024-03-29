const express = require("express");
const User = require("../modals/user");
const Router = express.Router();

// Create
Router.post("/users/",(req,res)=>{
    const newUser = new User(req.body)
    newUser.save()
    .then(()=>{
        res.status(201).send("new user is added")
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

// Get by Mobile number
Router.get("/users/:mobile",(req,res)=>{
    User.findOne({Mobile:req.params.mobile})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

module.exports = Router;
