const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "852123"
});



con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function(err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});