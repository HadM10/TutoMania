const express = require('express')
const router = express.Router()
const lessonController = require('../Controllers/lessonController');

router.route('/')
    .post(lessonController.addLesson)

router.route('/:id')
    .delete(lessonController.deleteLesson)
    .put(lessonController.editLesson)
    .get(lessonController.Lesson)

router.route('/saveDate/:id')
    .post(lessonController.saveDate)


module.exports = router