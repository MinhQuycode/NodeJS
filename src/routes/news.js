const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// Cấp con của trang news
router.get('/:slug', newsController.show);

//URL gốc để dưới cùng
router.get('/', newsController.index);

module.exports = router;
