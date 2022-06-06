const { Client } = require('pg')
module.exports = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "FastShopping"
})



// const { Client } = require('pg')
// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "root",
//   database: "FastShopping"
// })
// module.exports = client