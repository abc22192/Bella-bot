const TelegramBot = require('node-telegram-bot-api');

// ADD YOUR BOT TOKEN HERE (replace YOUR_BOT_TOKEN_HERE with your actual token)
const token = '7599060102:AAGdaB0a-zLxiYoH5stgyqdrBU7Z9NWvf2Y';
const bot = new TelegramBot(token, { polling: true });

// Welcome message
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Welcome to my filthy little world 😈  
Choose what you want. I'll do the rest…`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: '🔥 The Best Orgasm', callback_data: 'best_orgasm' }],
        [{ text: '🎧 Try a Free Sample', callback_data: 'sample' }],
        [{ text: '👃 Sniff Worn Items', callback_data: 'worn' }],
        [{ text: '💬 Talk to Me', callback_data: 'chat' }],
        [{ text: '🎥 Clip Store', callback_data: 'store' }]
      ]
    }
  });
});

console.log('Bot is running...');
