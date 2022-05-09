
var nodemailer = require('nodemailer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jeet13501@mysql',
    database: `weather_management_system`
});


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sftprojectiiita@gmail.com',
        pass: 'sft@2020'
    }
});


const sendmail = (text) => {

    connection.query('SELECT * FROM user', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            var transporter = nodemailer.createTransport({
                // service: 'gmail',
                service : 'smtp.gmail.com',
                host: 'smtp.gmail.com',
                auth: {
                    user: 'sftprojectiiita@gmail.com',
                    pass: 'sft@2020'
                }
            });
            // console.log(rows);
            for (let i = 0; i < rows.length; i++) {

                mailOptions = {
                    from: 'sftprojectIIITA@gmail.com',
                    to: `${rows[i].email}`,
                    subject: 'Alert!!! Pollution is Critical',
                    text: `${text}`
                }

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }

        } else {
            console.log(err);
        }
    });
}

module.exports = sendmail;

