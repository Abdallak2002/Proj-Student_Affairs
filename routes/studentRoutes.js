const express = require('express');
const studentController = require('../controllers/studentController.js');

const router = express.Router();

// Middleware
router.use(express.json());

// Get all students
router.get('/', studentController.getAllStudents);

// Get student by ID
router.get('/:id', studentController.getStudentById);

// Create a new student
router.post('/', studentController.createStudent);

// Update student by ID
router.put('/:id', studentController.updateStudent);

// Delete student by ID
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
