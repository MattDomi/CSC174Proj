const express = require('express');
const app = express();
const pool = require('./db');
const conn = require('conn');

const port = process.env.PORT || 3000;

app.use(conn());
app.use(express.json());
app.post('/create', (req,res) => {
  const acc_no = req.body.acc_no;
  const age = req.body.age;
  const c_first = req.body.c_first;
  const c_last = req.body.c_last;
  const phone = req.body.phone;

  pool.query( 
    'INSERT INTO "CLIENT" ("Account_no", "Age", "Client_First", "Client_Last", "Phone")' 
    + 'VALUES ($1, $2, $3, $4, $5)',
    [acc_no,age,c_first,c_last,phone],
    (err,result) => {
      if (err) {
      console.log(err);
    } else {
      console.log("Values inserted to Client info.");
    }
    }

  );
});

app.get("/Client", (req,res) => {
  pool.query("SELECT * FROM CLIENT", (err,result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
})

app.listen(port, () => {
  console.log('Server listening on the port ${port}');
})