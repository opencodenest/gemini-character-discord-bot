const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

// Your Discord Bot Token
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// Gemini API Key (ensure you keep this secret)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Gemini 1.5 flash API 
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY;

const CHARACTER_NAME='' //Elon Musk
const CHARACTER_ATTITUDE='' //Fun, hates OpenAI, occupy mars

// Create a new Discord client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the bot is ready
client.once('ready', () => {
    console.log('Bot is online! 🚀');
});


// Listening for messages
client.on('messageCreate', async (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Command to trigger the API
    if (message.content.startsWith('!talk ')) {
        const userQuery = message.content.slice(6).trim();
        
        if (!userQuery) {
            message.reply(`Please provide a question or topic for ${CHARACTER_NAME} to discuss!`);
            return;
        }

        try {
            // Request the Gemini API to respond in an character style
            const response = await axios.post(GEMINI_API_URL, {
                contents: [{
                    parts: [{
                        text: `Respond to this question like ${CHARACTER_NAME} would, with humour, and keeping in mind his general attitude: "${CHARACTER_ATTITUDE}". User input: "${userQuery}"`
                    }]
                }]
            });

            // Access the response data safely
            if (response.data.candidates && response.data.candidates[0].content && response.data.candidates[0].content.parts[0].text) {
                message.reply(response.data.candidates[0].content.parts[0].text);
            } else {
                message.reply("Sorry, I couldn't generate a response. Please try again.");
            }
        } catch (error) {
            console.error('Error communicating with Gemini API:', error);
            message.reply('There was an error while trying to fetch the response from the API.');
        }
    }
});

// Log the bot in
client.login(DISCORD_TOKEN);