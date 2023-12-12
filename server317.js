var message = 'CSC-317 startup template\n'
         + 'This template uses nodeJS, express, and express.static\n';

var port = 3000;
var path = require('path');
var express = require('express');
const app = express();
const fs = require('fs');
const mysql = require("mysql2/promise");

var StaticDirectory = path.join(__dirname, 'public');


//Create user pool
const pool = mysql.createPool({
    host:"localhost",
    user:"student",
    password:"student",
    database:"sfsu",
    connectionLimit: 1
});

app.use(express.static(StaticDirectory));
app.use(express.urlencoded({extended:true}));
// Set up a route for the home page

// move to payment page
app.get("/payment", (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "payment.html"));
})

app.post("/orderconfirmation", (req, res)=>{
    console.log('We are handling the user information!');
    console.log('------------ Contact Information ------------');
    console.log("First Name: " + req.body.first_name);
    console.log("Last Name: " + req.body.last_name);
    console.log("Phone Number: " + req.body.phone_number);
    console.log("Email Address: " + req.body.email);
    console.log('------------ Shipping Address ------------');
    console.log("Street Address: " + req.body.street_address);
    console.log("City: " + req.body.city);
    console.log("State: " + req.body.state);
    console.log("Zip Code: " + req.body.zipcode);
    console.log('------------ Payment ------------');
    console.log("Card Number: " + req.body.card_number);
    console.log("Expiration Date: " + req.body.expiration_date);
    console.log("CVC: " + req.body.cvc);

    res.status(200);
    res.sendFile(path.join(__dirname, "public", "orderConfirmation.html"));
})


app.post("/register_user", async (req, res) => {
    try {
        console.log(req.body)
    var payload = req.body
    const connection = await pool.getConnection();
    await connection.execute(
        'INSERT INTO user (user_name, email, password) VALUES (?,?,?)', [payload.username, payload.email, payload.password]
    );
    connection.release();
    res.sendFile(path.join(__dirname, "public", "index.html"));
    } catch (error) {
        console.log("Error at /register_user", error)
    }
})

app.post("/login_user", async (req, res) => {
    try {
    console.log(req.body)
    var payload = req.body
    const connection = await pool.getConnection();
    var response = await connection.execute(
        'SELECT * FROM user WHERE email = ? AND password = ?', [payload.email, payload.password]
    );
    connection.release();
    res.sendFile(path.join(__dirname, "public", "index.html"));
    } catch (error) {
        console.log("Error at /login_user", error)
    }
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
})



