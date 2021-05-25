const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //   //url news
    app.use('/news', newsRouter);

    //Url / để dưới cùng
    app.use('/', siteRouter);

    //url home
    //   app.get("/", function (req, res) {
    //     res.render("home");
    //   });

    //   //url search method GET
    //   app.get("/search", function (req, res) {
    //     console.log(req.query);
    //     res.render("search");
    //   });
    //url search method POST
    //   app.post("/search", function (req, res) {
    //     console.log(req.body);
    //     res.render("search");
    //   });
}

module.exports = route;
