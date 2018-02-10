const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3300;

var app  = express();

app.listen(port, () => {
    console.log('Server Start >>>> HAVE Fun!!!!');
});

hbs.registerPartials(__dirname + '/views/Partials');
app.set('view engine','hbs');

// app.use((req, res, next) => {
//     res.render('maintanc.hbs');
// });

hbs.registerHelper('getyear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pagetitle: 'Home'
    });
    });
    
app.get('/about', (req, res) => {
res.render('about.hbs', {
    pagetitle: 'About'

});
});

