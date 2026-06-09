
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());


const contactRoutes = require('./routes/contact');

app.use('/api/contact', contactRoutes);


if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static(path.join(__dirname, '../client/dist')));

  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
  });
} else {
  
  app.get('/', (req, res) => {
    res.send('Portfolio API Server is running');
  });

  
  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Resource not found' });
  });
}


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
