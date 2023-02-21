var express = require('express');
const cors = require('cors');
const path = require('path');
var axios = require('axios');

var app = express();
const res = require('express/lib/response');

app.use(cors(), express.json());


app.get( '/health', (req, res) => {
    res.send( "healthy" );
  });

const port = process.env.PORT || 3000

app.all('/radio1', async (req, res) => {
  
  var config = {
    method: 'get',
    url: 'https://rms.api.bbc.co.uk/v2/services/bbc_radio_one/segments/latest?limit=1'
  };
  
  axios(config)
  .then(function (response) {
    var song = response.data;
    var songTitle = song['data'][0]['titles']['secondary']
    var songArtist = song['data'][0]['titles']['primary']
    res.json({"songTitle":songTitle, "songArtist":songArtist});
  })
  .catch(function (error) {
    console.log(error);
  });

});

app.all('/radio2', (req, res) => {
  var config = {
    method: 'get',
    url: 'https://rms.api.bbc.co.uk/v2/services/bbc_radio_two/segments/latest?limit=1'
  };
  
  axios(config)
  .then(function (response) {
    var song = response.data;
    var songTitle = song['data'][0]['titles']['secondary']
    var songArtist = song['data'][0]['titles']['primary']
    res.json({"songTitle":songTitle, "songArtist":songArtist});
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.all('/radio3', (req, res) => {
  var config = {
    method: 'get',
    url: 'https://rms.api.bbc.co.uk/v2/services/bbc_radio_three/segments/latest?limit=1'
  };
  
  axios(config)
  .then(function (response) {
    var song = response.data;
    var songTitle = song['data'][0]['titles']['secondary']
    var songArtist = song['data'][0]['titles']['primary']
    res.json({"songTitle":songTitle, "songArtist":songArtist});
  })
  .catch(function (error) {
    console.log(error);
  });
})

const server = app.listen(port, function() {
    console.log("Server running at http://127.0.0.1:" + port + "/");
  });