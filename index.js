const express = require('express')

const dotenv = require('dotenv')

const sql = require('./database/db')
 
 

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.get('/test-db', async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
  });

app.listen(PORT, (req,res) => {
    console.log(`server is listening on  port ${PORT}`)
})