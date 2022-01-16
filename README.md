# twilio-bbc-radio

## What does it do?

This will deploy an API that returns the current playing song across the BBC (music focused) radio stations.

This is connected to a Twilio WhatsApp Sender. 

I have deployed this to Heroku. 

### What are the endpoints?

1. `/health` returns healthy (health check)
2. `/radio1` song currently playing on Radio 1
3. `/radio2` song currently playing on Radio 2
4. `/radio3` song currently playing on Radio 3
5. `/radio6` song currently playing on Radio 6
6/ `/an` song currently playing on Asian Network

### Running:
`npm start`

Will automatically attach to the port for a Heroku or AWS Elastic Beanstalk instance or alternatively will be on port `:3000`

## Twilio connection

I recommend using WhatsApp for the quick buttons. Nothing will stop this working attached to an SMS channel, you just won't benefit with the quick buttons.

### WhatsApp Templates
Use a WhatsApp template to have the quick reply buttons appear. This is something that the WhatsApp API automatically enriches with.

```
Pick a station to see what song is playing:\nYou can also ask me "what else can you do?"
```
Within there, I have used **Quick reply** buttons:

1. Button 1: `Radio 1`
2. Button 2: `Radio 2`
3. Button 3: `Radio 3`
