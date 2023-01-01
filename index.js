const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const dotenv = require('dotenv');
const ytdl = require("ytdl-core");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const queue = new Map();

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});



client.login(token);
