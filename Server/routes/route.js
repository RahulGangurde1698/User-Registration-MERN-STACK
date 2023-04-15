
const express = require('express');
const router = express.Router();

require('../database/db');
const User = require ("../Model/Scema");

router.post('/data', async (req, res) => {
    // res.json({message: req.body});
    console.log(req.body);
    const {  name,last,email,pass,mob } = req.body;

    if (!name || !last || !email || !pass || !mob) {
        return res.status(422).json({ error: "Please fill the field Properly" });
    }

    try{

       const userexist = await User.findOne({ name:name })


       if (userexist) {
        return res.status(422).json({ error: "Name is already exist Please try another" });
    }

    const user = new User({name,last,email,pass,mob });

          await  user.save(); 

    
              res.status(201).json({ message: "user register succesfully" });


    }catch (err){
        console.log(err); 
    }
});

router.get('/data',(req,res)=>{
    User.find()
       .then(founddetail=> res.json(founddetail));
})

router.get('/datauser',(req,res)=>{
    User.find()
       .then(founddetail=> res.json(founddetail[0]));
})

// router.patch('/updatedatauser', async(req,res)=>{
//     try{
//     //    const userdata=[req.body.name,req.body.last,req.body.pass,req.body.email] 
//            const updateusers=await user(req.body,{new:true}) ;
//        res.send(updateusers);
//        console.log(updateusers);
//     }catch(e){
//         res.status(404).send(e);
//     }
//        // User.find()
//     //    .then(founddetail=> res.json(founddetail[0]));
// })




// app.get("/data",(req,res)=>{
//     res.send("Hello from node")
// });

module.exports = router;