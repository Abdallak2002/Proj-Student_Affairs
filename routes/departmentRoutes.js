const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController.js');

// Middleware
router.use(express.json());

// GET all departments
router.get('/', departmentController.getDepartment);

// POST a new department
router.post('/', departmentController.createDepartment);

// PUT update a department
router.put('/:id', departmentController.updateDepartment);

// DELETE a department
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
