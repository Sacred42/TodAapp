const express = require('express');
const ehbs = require('express-handlebars');
const path = require('path');
const hbs = ehbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});
const app = express();
const router = require('./router/router');

app.listen(3000, ()=> console.log('Cервер запущен успешно!'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'статика')));
app.use(router);

