const mongoose = require("mongoose");
const { image } = require("../utils/cloudinary");

const productSchema =new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    new_price:{
        type: Number,
        required: true
    },
    old_price:{
        type: Number,
        required:true
    },
    image_url: {
        type: String,
        required: true
      }
},
{timestamps: true}
)

const Product = mongoose.model("Products", productSchema);

module.exports = Product;