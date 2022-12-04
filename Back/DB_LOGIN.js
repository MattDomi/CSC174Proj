// POSTGRES CREDENTIALS

const conn = require("pg").pool;

const pool = new conn({
  host: "ec2-54-82-205-3.compute-1.amazonaws.com",
  database: "d3bgqcqvsdgc88",
  port: "5432",
  user: "zrfphcozxudntg",
  password: "927444a82c199deb7a4ce722a25b54ad3b421f7b34ba49a875fc604eca418a76"


});

module.exports = pool;