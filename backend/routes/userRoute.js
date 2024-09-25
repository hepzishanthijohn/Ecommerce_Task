const express = require('express');
const router = express.Router();
const Users = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      let user = await Users.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      let cart = {};
      for(let i = 0; i < 300; i++){
          cart[i] = 0;
      }
  
      user = new Users({
        name,
        email,
        password,
        cartData:cart,
      });
  
      await user.save();
      
      res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  });
  router.post("/user-login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await Users.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
  
      // Check if password matches
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
  
      const payload = {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      };
  
      // Sign the JWT token
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token,username:user.name });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  });
//creating endpoint for user login
router.post('/login', async(req, res) =>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data ={
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true, token})
        }
        else{
            res.json({success:false, errors:"Wrong Password"});
        }
        
    }
    else{
        res.json({success:false, errors:"Wrong Email Id"})
    }
})


//creating middleware to fetch user
const fetchUser = async(req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }else{
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authenticate using a valid token"})
        }
    }
}

//creating endpoint for adding products in cartData
router.post('/addtocart',fetchUser, async(req, res)=>{
    console.log("Added", req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

//creating endpoint to remover product from cartdata
router.post('/removefromcart', fetchUser,async(req, res)=>{
    console.log("removed", req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed") 
})

//creatind endpoint to get cartData
router.post('/getcart',fetchUser, async(req, res) =>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    
})

module.exports = router;