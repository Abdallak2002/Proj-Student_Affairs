const express = require('express');
const mongoose = require('mongoose');
const departmentRoutes = require('./routes/departmentRoutes.js');
const subjectRoutes = require('./routes/subjectRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const doctorRoutes = require('./routes/doctorRoutes.js');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Failed to connect to MongoDB:', error);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/departments', departmentRoutes);
app.use('/subjects', subjectRoutes);
app.use('/students', studentRoutes);
app.use('/doctors', doctorRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
