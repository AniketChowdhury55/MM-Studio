  const { render } = require("ejs");
  const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body
  
    // Set up the email transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_FROM_EMAIL, // Your Gmail address
        pass: process.env.NODE_MAILER , // Your Gmail password (or app password)
      },
    });

   // Email options
   let mailOptions = {
    from: email,
    to: process.env.USER_TO_EMAIL, // Your Gmail address
    subject: 'New message from website contact form',
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };   

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully');
        }
      });
    });

app.get("/", (req, res) => {
    res.send("hi, i m root")
});

app.get("/home", async (req, res) => {
   res.render("./home.ejs")
})

 app.get("/work", async (req, res) => {
    res.render("./work.ejs")
 })
 



app.listen(8080, () => {
    console.log("listening to port 8080")
})