const express = require('express')
const app = express()
const port = 3000

//url 
app.get('/trang-chu', (req, res) => {
    var a= 1;
    var c=2;
    var b = a+c
  res.send('Hello World!')
})

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})