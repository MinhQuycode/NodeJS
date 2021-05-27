const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
// Cấp con của trang courses
router.get('/:slug', coursesController.show);

module.exports = router;
