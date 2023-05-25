const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject'
    }
  ]
});

module.exports = mongoose.model('Subject', subjectSchema);
