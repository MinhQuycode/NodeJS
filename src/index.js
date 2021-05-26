path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const port = 3000;

const route = require('./routes');

//url tới thư mục public ảnh
app.use(express.static(path.join(__dirname, 'public')));

//Dưới dạng form html
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));
//Teamplate engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Action ===> Dispatcher ===> Function handler

//Routes init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
