const Student = require('../models/student.js');

// إنشاء طالب جديد
const createStudent = async (req, res) => {
  try {
    const { name, username, password, academicNumber } = req.body;
    const student = new Student({ name, username, password, academicNumber });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
};

// الحصول على طالب محدد
const getStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
  }
};

// تحديث بيانات الطالب
const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { name, username, password, academicNumber } = req.body;
    const student = await Student.findByIdAndUpdate(
      studentId,
      { name, username, password, academicNumber },
      { new: true }
    );
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// حذف طالب
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findByIdAndDelete(studentId);
    if (student) {
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};

module.exports = {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
