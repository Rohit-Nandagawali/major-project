const nodemailer = require('nodemailer');
require('dotenv').config();

const transporterMail = nodemailer.createTransport({

    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports = transporterMail;