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

const port = process.env.PORT || 5000

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.get('/initiate/:number', (req, res) => {
    client.messages
    .create({
        from: 'whatsapp:+447427950173',
        body: 'Pick a station to see what song is playing:\nYou can also ask me "what else can you do?"',
        to: 'whatsapp:' + req.params.number
    })
    .then(message => res.send(message.sid));
});

app.get('/start/:number', (req, res) => {
    res.json(req.params.number)
})

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

// function station(stn, index, removeHashes){
//     latestTweets(stn, function (err, tweets) {
//         var song = tweets[index]['content'];
//         var songTitle = song.slice(12);
//         if (removeHashes){
//             songTitle = songTitle.split('#')[0]
//             console.log('transformed ###')
//         }
//         console.log(songTitle)
//         //return songTitle
//         return songTitle
//         //console.log(encodeURI('https://open.spotify.com/search/'+songTitle))
//       })
// }

const server = app.listen(port, function() {
    console.log("Server running at http://127.0.0.1:" + port + "/");
  });