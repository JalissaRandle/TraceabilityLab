const express = require('express')
const cors = require('cors')
const app = express()
const req = require('express/lib/request')

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
const res = require('express/lib/response')
const req = require('express/lib/request')
var rollbar = new Rollbar({
  accessToken: '1c5c3bc5f0e9422e918dabc13ccade6e',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const pets = ['dogs', 'cats', 'fish']
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/pets/', (req, res) => {
    res.status(200).send(pets)
    rollbar.log('someone requested to see the pets')
})

// app.post('/api/pets/' (req,res) => {

// })















const port = process.env.PORT || 4040

app.listen(port, () => console.log(`Server is listening on ${port}`))
