const doctor = require('../models/doctor.js');

// إنشاء أستاذ جديد
const createdoctor = async (req, res) => {
  try {
    const { name, field, department } = req.body;
    const doctor = new doctor({ name, field, department });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create doctor' });
  }
};

// الحصول على أستاذ محدد
const getdoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await doctor.findById(doctorId);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: 'doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve doctor' });
  }
};

// تحديث بيانات الأستاذ
const updatedoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { name, field, department } = req.body;
    const doctor = await doctor.findByIdAndUpdate(
      doctorId,
      { name, field, department },
      { new: true }
    );
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: 'doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update doctor' });
  }
};

// حذف أستاذ
const deletedoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await doctor.findByIdAndDelete(doctorId);
    if (doctor) {
      res.json({ message: 'doctor deleted successfully' });
    } else {
      res.status(404).json({ error: 'doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete doctor' });
  }
};

module.exports = {
  createdoctor,
  getdoctor,
  updatedoctor,
  deletedoctor,
};
