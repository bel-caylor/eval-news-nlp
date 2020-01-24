const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
let aylienData = [];

//Setup Aylient API
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Listening on port 8000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const getAylienAPI = async (req, res) => {
  const getData = await textapi.entities(req.body.URL,
    function(error, response) {
    if (error === null) {

    let newData = response.entities;
    let newEntry = {
      loc: newData.location,
      keyW: newData.keyword,
      org: newData.organization,
      pers: newData.person
      };
    aylienData.push(newEntry);
    console.log('Data End of Post:', aylienData);
    }else{
    console.log("error:",  error);
    console.log(textapi);
  }
  })
};

app.post('/apiData', getAylienAPI);

app.get('/getData', function (req, res) {
    console.log('Data Begin of Get:', aylienData);
    setTimeout(function() {res.send(aylienData);}, 3000)
    console.log('Data sent')
    aylienData = [];
});
