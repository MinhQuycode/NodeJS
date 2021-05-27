const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class SiteController {
    //Chứa các trang không có nhiều các trang con

    // [GET] /home
    index(req, res, next) {
        //Promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
