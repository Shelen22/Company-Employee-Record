const express = require("express");

require("dotenv").config();

const jwt = require("jsonwebtoken");

const newToken = (login)=>{
  return jwt.sign({login: login}, process.env.JWT_ACCESS_KEY);
}

const router = express.Router();

const Employee = require("../models/employees.model");

router.post("/create", async (req, res) => {
  try {
    const List = await Employee.create({
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
      department: req.body.department,
      gender: req.body.gender,
      joiningDate: req.body.joiningDate,
      profile: req.body.profile,
      payment: [
        {
          month: req.body.payment[0].month,
          year: req.body.payment[0].year,
          salary: req.body.payment[0].salary,
        },
      ],
    });

    return res.status(200).send({List});
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const pages = req.query.page || 1;
    const size = req.query.size || 4;
    const skip = (pages - 1) * size;

    const Employees = await Employee.find()
      .skip(skip)
      .limit(size)
      .lean()
      .exec();
    const totalPages = Math.ceil(
        ( await Employee.find().countDocuments() )/size
    );
      
    return res.status(200).send({Employees , totalPages});
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

router.post("/login", async (req, res) => {
  if (req.body.username && req.body.password) {
    const login = await Employee.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .lean()
      .exec();
    const token = newToken(login);
    if (login) {
      // console.log(token)
      return res.status(200).json({ login,token});
    } else {
      return res
        .status(404)
        .send({ message: "You are not Employee of our company"});
    }
  }
});


router.get("/:gender", async (req, res) =>{
   try{
     if(req.params.gender === "all"){
      const Filter = await Employee.find({}).lean().exec();
      return res.status(200).send(Filter)      
     }
      const Filter = await Employee.find({gender: req.params.gender}).lean().exec();
      
      return res.status(200).send(Filter)
   }
   catch(e){
     return res.status(500).send({ message: e.message})
   }
})

router.get("/employees/:username", async (req, res) =>{
  try{
     const byName = await Employee.find({username: req.params.username}).lean().exec();
     
     return res.status(200).send(byName)
  }
  catch(e){
    return res.status(500).send({ message: e.message})
  }
})

module.exports = router;
