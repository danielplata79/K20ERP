const express = require("express");
const livereload = require("livereload");
const path = require("path");
const app = express();
const morgan = require("morgan");
const port = 3000;
const mysql2 = require("mysql2");
const figlet = require("figlet");
const concurrently = require("concurrently");

console.log("");
console.log("---------------------------------------------------------------");
console.log(figlet.textSync("K20 ERP - API"));
console.log("---------------------------------------------------------------");
console.log("");

// Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

// Launching APP
app.listen(port, () => {
	console.log(`	🔔 Server    = ✅ ON PORT ${port} 💡`);	
});

// Middlewares
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
  
  

// app.use(express.urlencoded({extended: false}));

// Admitir
app.use(express.json())

// Routes
app.use('/api', require('./routes/index'));


// MYSQL Connection to DB
//
 const connection = mysql2.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'sl4yer',
	port: '3306',
	database: 'crudex'
 });


connection.connect((err) => {
	if (err) throw err;
	console.log("	🔔 Database  = ✅ Conectado    🔨");
	console.log(" "); // Space between Config logs and NODE LOGS - Do not delete
	console.log("---------------------------------------------------------------");
});


module.exports = app;
