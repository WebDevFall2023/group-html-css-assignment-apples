var message = 'CSC-317 startup template\n'
         + 'This template uses nodeJS, express, and express.static\n';

var port = 3000;
var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs');

var StaticDirectory = path.join(__dirname, 'public');

app.use(express.static(StaticDirectory));
app.use(express.urlencoded({extended:true}));
// Set up a route for the home page

// move to payment page
app.get("/payment", (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "payment.html"));
})

app.post("/placeorder", (req, res)=>{

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
    res.send("Yor order has been placed!")
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

console.log(message);
