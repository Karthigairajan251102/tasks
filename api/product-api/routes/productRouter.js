const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/product');

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // destination folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage: storage });

// POST /add-product
router.post('/add-product', upload.single('image'), async (req, res) => {
  try {
    const { name, rate } = req.body;
    const image = req.file ? req.file.path : '';

    const product = new Product({ name, rate, image });
    await product.save();

    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
