const express = require('express');
const subjectController = require('../controllers/subjectController.js');

const router = express.Router();

// Middleware
router.use(express.json());

// Get all subjects
router.get('/', subjectController.getAllSubjects);

// Get subject by ID
router.get('/:id', subjectController.getSubjectById);

// Create a new subject
router.post('/', subjectController.createSubject);

// Update subject by ID
router.put('/:id', subjectController.updateSubject);

// Delete subject by ID
router.delete('/:id', subjectController.deleteSubject);

module.exports = router;
