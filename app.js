var express = require('express');
const cors = require('cors');
const path = require('path');

var app = express();
var latestTweets = require('latest-tweets');
const res = require('express/lib/response');

app.use(cors(), express.json());


app.get( '/health', (req, res) => {
    res.send( "healthy" );
  });

const port = process.env.PORT || 3000

app.all('/radio1', async (req, res) => {
    latestTweets("bbcr1musicbot", function (err, tweets) {
        var song = tweets[0]['content'];
        var songTitle = song.slice(12);
        songTitle = songTitle.split('#')[0]
        res.json({"song":songTitle})
      })
});

app.all('/radio2', (req, res) => {
    latestTweets("bbcr2musicbot", function (err, tweets) {
        var song = tweets[1]['content'];
        var songTitle = song.slice(12);
        res.json({"song":songTitle})
      })
})

app.all('/radio3', (req, res) => {
    latestTweets("bbcr3musicbot", function (err, tweets) {
        var song = tweets[1]['content'];
        var songTitle = song.slice(12);
        songTitle = songTitle.split('#')[0]
        res.json({"song":songTitle})
      })
})

app.all('/radio6', (req, res) => {
    latestTweets("BBC6MusicBot", function (err, tweets) {
        var song = tweets[0]['content'];
        var songTitle = song.slice(12);
        res.json({"song":songTitle})
      })
})

app.all('/an', (req, res) => {
    latestTweets("BBCANMusicBot", function (err, tweets) {
        var song = tweets[0]['content'];
        var songTitle = song.slice(12);
        songTitle = songTitle.split('#')[0]
        res.json({"song":songTitle})
      })
})

const server = app.listen(port, function() {
    console.log("Server running at http://127.0.0.1:" + port + "/");
  });