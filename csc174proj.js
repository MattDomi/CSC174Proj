const express = require('express')
const app = express()
const postgres = require('postgres')

const port = process.env.PORT || 3000

// connection details
//const connection = postgres.createConnection({
//    host: 'ec2-54-82-205-3.compute-1.amazonaws.com',
  //  user: 'zrfphcozxudntg',
  //  password: '927444a82c199deb7a4ce722a25b54ad3b421f7b34ba49a875fc604eca418a76',
  //  database: 'd3bgqcqvsdgc88',
  //  port:5432
//});




// view engine
app.set('view engine', 'ejs')

//connection.query('SELECT * FROM CLIENT', (error,rows) => {
//
   //if(error) throw error;
//
   // if(!error){
  //     console.log(rows) 
  // }
//})


// Render Home Page
app.get('/', function(req,res) {
    res.render('pages/index')
})

app.listen(port)
console.log('Server is listening on port 3000');