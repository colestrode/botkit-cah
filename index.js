var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_API_TOKEN
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

controller.on('rtm_open', function() {
  console.log('rtm opened');
  console.log(arguments);
});

controller.on('rtm_closed', function() {
  console.log('rtm closed');
  console.log(arguments);
});


// give the bot something to listen for.
controller.hears('hello','direct_message,direct_mention,mention,ambient',function(bot,message) {

  bot.reply(message,'Hello yourself.');

});