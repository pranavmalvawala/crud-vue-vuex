const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/data/cats/:pageNo', function (req, res) {
  const pageNo = req.params.pageNo
  fs.readFile('./data.json', 'utf-8', (err, dataInJson) => {
    if (err) {
      console.log(err)
    }
    try {
      const dataObject = JSON.parse(dataInJson)
      res.send({ dataObject })
    } catch (err) {
      console.log(err)
    }
  })
})

app.listen(5000, function () {
  console.log('server started on port 5000')
})
