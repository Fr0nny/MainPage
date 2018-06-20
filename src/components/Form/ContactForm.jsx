/*const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const contactForm = express();

//View engine setup
contactForm.engine('handlebars', exphbs());
contactForm.set('view engine', 'handlebars');

//Static folder
contactForm.use('/src/assets/css', express.static(path.join(__dirname, 'src')));

//Body Parser Middleware
contactForm.use(bodyParser.urlencoded({ extendend: false }));
contactForm.use(bodyParser.json());

contactForm.get('/', (req, res) => {
	res.send('Hello');
});
*/