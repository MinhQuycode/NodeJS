const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// Cấp con của trang news
router.use('/:slug', newsController.show);

//URL gốc để dưới cùng
router.use('/', newsController.index);

module.exports = router;
