const Subject = require('../models/subject.js');

// إنشاء مادة جديدة
const createSubject = async (req, res) => {
  try {
    const { name, code, department, prerequisites } = req.body;
    const subject = new Subject({ name, code, department, prerequisites });
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create subject' });
  }
};

// الحصول على مادة محددة
const getSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findById(subjectId);
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve subject' });
  }
};

// تحديث بيانات المادة
const updateSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const { name, code, department, prerequisites } = req.body;
    const subject = await Subject.findByIdAndUpdate(
      subjectId,
      { name, code, department, prerequisites },
      { new: true }
    );
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update subject' });
  }
};

// حذف مادة
const deleteSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findByIdAndDelete(subjectId);
    if (subject) {
      res.json({ message: 'Subject deleted successfully' });
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete subject' });
  }
};

module.exports = {
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
};
