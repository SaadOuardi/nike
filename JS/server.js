const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes


app.post('/send-email', (req, res) => {
    const { fullName, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saadouardi21@gmail.com',
            pass: 'xctk xhzb gbel zjlb',
        },
    });

    const mailOptions = {
        from: '"Your Name" <saadouardi18@gmail.com>',
        to: 'saadouardi21@gmail.com',
        subject: subject,
        text: `From: ${fullName}\nEmail: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error); // Log the error
            return res.status(500).send('Internal Server Error');
        }

        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
