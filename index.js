import db from './config/DBConnection.js'
import  express from 'express';
const app =express()
const port=process.env.PORT;


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });