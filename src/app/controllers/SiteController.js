class SiteController {
    //Chứa các trang không có nhiều các trang con

    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
