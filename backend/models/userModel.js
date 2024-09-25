const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

const Users = mongoose.model('Users', UserSchema)
module.exports = Users