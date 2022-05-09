const express = require('express');
const router = express.Router();
const polutant = require('../../polutant');
const userController = require('../controllers/mainController');

const app = express();

// routes
app.get('/', (req, res) => {
    res.render('monitor',{ layout: 'index' });
});
app.get('/polutant', (req, res) => {
    let data = polutant();
    res.render('polutant',{ layout: 'index', polutant_data : data});
});
// 
//Sets a basic route
app.get('/room', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    let data = room();
    res.render('room', { layout: 'index' , room_data : data});
});

app.get('/register', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('register', { layout: 'index'});
});

app.post('/register', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    // let email = req.body.email;
    // let phone = req.body.phone;

    // res.send(`${email}, ${phone}`);
    // console.log()
});

