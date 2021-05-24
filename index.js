const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))
//url 
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})