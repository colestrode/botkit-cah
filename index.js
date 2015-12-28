var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_API_TOKEN
}).startRTM();

controller.on('rtm_opened', function() {
  console.log('open for business');
});

// give the bot something to listen for.
controller.hears('hello','direct_message,direct_mention,mention,ambient',function(bot,message) {

  bot.reply(message,'Hello yourself.');

});