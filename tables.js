//create server using local host:3000
var express = require("express");
var bodyParser = require("body-parser");
var alert = require("alert-node");

var app = express();

var PORT = 3000;

app.listen(PORT, function() {
  console.log("listening on port 3000");
});

//array variables to hold data
var tableList = [];
var waitList = [];

//push first 5 people to table list, then, if full, push to wait list

var newReservation = {
  customerEmail: "bg@gmail.com",
  customerID: 12345,
  customerName: "brandong",
  phoneNumber: 1234567
};

if (tableList.length <= 5) {
  tableList.push(newReservation);
  alert("your table is ready!");
} else {
  waitList.push(newReservation);
  alert("you've been waitlisted!");

}
// console.log(newCustomer);
console.log("table list: ", tableList);
console.log("wait list: ", waitList);






//array for table reservations (4 indices only)
//if tables are full (array.length > 4) { push to other array}

//make routes for getting and posting table data

//routes for html pages (3), api/waitlist, api/tables (get requests)
//post route to create user data

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to Best Hot Tacos in Z World");
});

app.get("/tables", function(req, res) {
  res.send("View tables");
});

app.get("/reservations", function(req, res) {
  res.send("Make a reservation");
});

app.get("/api/tables", function(req, res) {
  res.json(newReservation);
});

app.get("/api/waitlist", function(req, res) {
  res.json(newReservation);
});

app.post("/api/add", function(req, res) {
  res.send("return");
});