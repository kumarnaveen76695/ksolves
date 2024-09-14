// backend/models/Class.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lectures: [{ title: String, content: String }],
});

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  units: [{ title: String, sessions: [sessionSchema] }],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Class', classSchema);
