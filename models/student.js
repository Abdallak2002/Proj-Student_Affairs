const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  academicNumber: {
    type: String,
    required: true,
    unique: true
  },
  enrolledSubjects: [
    {
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
      },
      grade: {
        type: Number,
        default: 0
      }
    }
  ]
});

module.exports = mongoose.model('Student', studentSchema);
