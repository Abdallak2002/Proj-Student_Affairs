const Department = require('../models/department.js');

// إنشاء قسم جديد
const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;
    const department = new Department({ name, description });
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create department' });
  }
};

// الحصول على قسم محدد
const getDepartment = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const department = await Department.findById(departmentId);
    if (department) {
      res.json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve department' });
  }
};

// تحديث بيانات القسم
const updateDepartment = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const { name, description } = req.body;
    const department = await Department.findByIdAndUpdate(
      departmentId,
      { name, description },
      { new: true }
    );
    if (department) {
      res.json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update department' });
  }
};

// حذف قسم
const deleteDepartment = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const department = await Department.findByIdAndDelete(departmentId);
    if (department) {
      res.json({ message: 'Department deleted successfully' });
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete department' });
  }
};

module.exports = {
  createDepartment,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
