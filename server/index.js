let path = require('path')
let db = require('../database')
let bodyParser = require('body-parser')
let express = require('express')
let app = express()
let PORT = 8000

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.post('/plates', (req, res) => {
  db.createPlate(req.body.plateNumber)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err))
})

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`)
})