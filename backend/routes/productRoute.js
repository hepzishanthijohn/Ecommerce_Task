const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../middleware/multer");
const Product = require("../models/productModel")

// POST route to upload an image along with additional fields
router.post('/upload', upload.single('image'), async (req, res) => {
    // Extract additional fields from the request body
    const { title, category, new_price, old_price } = req.body;
  
    // Check if required fields are present
    if (!title || !category || !new_price || !old_price) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }
  
    try {
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'online-shop' });
      // Generate id
      let products = await Product.find({}).sort({ id: -1 }).limit(1);
      let id = 1;
      if (products.length > 0) {
          id = products[0].id + 1;
      }
      // Create a new product document
      const newProduct = new Product({
        id:id,
        title,
        category,
        new_price,
        old_price,
        image_url: result.secure_url
      });
  
      // Save the product to the database
      await newProduct.save();
  
      // Respond with success
      res.status(200).json({
        success: true,
        message: "Image uploaded and product saved successfully",
        data: newProduct
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Error uploading image or saving product"
      });
    }
  });

  router.get('/getAllProducts', async (req, res) => {
    try {
      const data = await Product.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.post('/removeproduct', async(req, res) =>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

router.get('/newcollections', async(req, res) =>{
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  
  res.send(newcollection)
})

router.get('/popularinwomen', async(req, res) =>{
  let products = await Product.find({category: "women"})
  let popular_in_women = products.slice(0,4);
  console.log("Popular in Women fetched");
  res.send(popular_in_women);
  
})

module.exports = router;