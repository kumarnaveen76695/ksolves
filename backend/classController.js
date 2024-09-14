// backend/controllers/classController.js
const Class = require('./models/Class');

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const newClass = new Class({
      title: req.body.title,
      instructor: req.user.id,
    });
    const savedClass = await newClass.save();
    res.json(savedClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Enroll a student
exports.enrollStudent = async (req, res) => {
  try {
    const classToEnroll = await Class.findById(req.params.classId);
    if (!classToEnroll) return res.status(404).json({ msg: 'Class not found' });

    classToEnroll.enrolledStudents.push(req.body.studentId);
    await classToEnroll.save();
    res.json(classToEnroll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
