const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.reg = (req, res) => {
  console.log(req.body);

  const {name,	roll,	father,	mobile,	gender,dob ,address} = req.body;

  db.query('SELECT roll FROM student WHERE roll = ?', [roll], async (error, results) => {
    if(error) {
      console.log(error);
    }
   
    if( results.length> 0 ) {
      return res.render('student', {
        message: 'That roll number is already registered'
      })
    } 
    db.query('INSERT INTO student SET ?', {name:name ,roll:roll ,father:father,mobile:mobile ,gender:gender ,dob:dob ,address:address}, (error, results) => {
      if(error) {
        console.log(error);
      } 
      else {
        console.log(results);
        return res.render('student', {
          message: 'Student registered'
        });
    }
  });
  });
}