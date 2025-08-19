const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const productRoutes = require('./routes/productRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // image access

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/sample-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

// Routes
app.use('/api', productRoutes);

// Start server
const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
