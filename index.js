// const rand = require("./random_number_generator.js");
// const data = require("./polutant.js");

// let ans = data();
// console.log(ans);
// console.log(rand(30,50));

// const getInfo = require('./sensor');
// const room = require('./room');
const random_number_generator = require('./random_number_generator');
const polutant = require('./polutant');
const mysql = require('mysql2');
const sendmail = require('./sendmail');


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jeet13501@mysql',
  database: `weather_management_system`
});



//Loads the express module
const express = require('express');
// import { engine } from 'express-handlebars';
//Creates our express server
const app = express();
// const router = express.Router();
//Loads the handlebars module
const hbs = require('express-handlebars');
const port = 3000;
app.use(express.urlencoded({ extended: true })); // New
app.use(express.json());
// app.use(upload.array()); 

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

// Setting template Engine
app.set('view engine', 'hbs');
// Configure template Engine and Main Template File
app.engine('hbs', hbs.engine({
  extname: 'hbs',
  // defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials'
}))




// DATABASE QUERIES

// const getUsers = (req, res) => {
//     // User the connection
// }

// let data = getUsers();
// console.log(data);

// routes
app.get('/', (req, res) => {
  let pol = polutant();
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log(date);

  connection.query('SELECT * FROM room WHERE date = ?', [date], (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      console.log(rows[0]);
      res.render('monitor', { layout: 'index', polutant_data: pol , data: rows[0]});
    } else {
      console.log(err);
    }
  });
});
app.get('/polutant', (req, res) => {
  let data = polutant();
  let text = '';
  if(data.no2.quality=="VERY HIGH"){
    text+='NO2, '
  }
  if(data.o3.quality=="VERY HIGH"){
    text+='O3, '
  }
  if(data.pm10.quality=="VERY HIGH"){
    text+='PM10, '
  }
  if(data.pm25.quality=="VERY HIGH"){
    text+='PM2.5, '
  }
  if(text!=''){
    let mes = `The Presenence of poutant ${text} is Very High `;
    sendmail(mes);
  }
  res.render('polutant', { layout: 'index', polutant_data: data });
});
// 
//Sets a basic route
app.get('/room', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"

  let today = new Date();

  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log(date);

  connection.query('SELECT * FROM room WHERE date = ?', [date], (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      console.log(rows[0]);
      res.render('room', { layout: 'index', data: rows[0] });
      // res.render('room',{layout:'index',data: rows});
    } else {
      console.log(err);
    }
  });

});

app.get('/register', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('register', { layout: 'index' });
});

app.post('/register', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  let email = req.body.email;
  let phone = req.body.phone;

  connection.query('INSERT INTO user SET email = ?, phone = ?', [email, phone], (err, rows) => {
    if (!err) {
      //   res.render('add-user', { alert: 'User added successfully.' });
      let data = polutant();
      res.render('register', { layout: 'index', polutant_data: data ,text: 'Successfully Registered'});
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
});

app.get('/notification', (req, res) => {
  res.render('notification', { layout: 'index' });
})

app.get('/previousData', (req, res) => {
  res.render('previousData', { layout: 'index' });
})

app.post('/previousData', (req, res) => {
  let from = req.body.from;
  let to = req.body.to;
  console.log(from);
  console.log(to);

  connection.query('SELECT * FROM room WHERE date between ? AND ?', [from, to], (err, rows) => {
    if (!err) {
      console.log(rows);
      res.render('previousData', { layout: 'index', data: rows });
    } else {
      console.log(err);
    }
  })

})


//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
