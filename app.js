const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! from Adarsh');
});

app.listen(5000, (err,res) => {
 if (err) {
       console.log(err)
 } else {
      console.log('Server is Running on port 5000')
 }
})