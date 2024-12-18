const fs = require('fs-extra');
const path = require("path");
const { Sequelize } = require('sequelize');

// Load environment variables if the .env file exists
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;

module.exports = {
    session: process.env.FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpXRGtmY1F2ei81cUxkMEtNeGQvUyszK1JSMkxiWm1iY0xtVW5QWWJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianN2Z2ZNemMzV0srMTluZVpzd2JBY2RUZ1lBOWdlb3RQbGsrUGpabmt5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ1Y0VE1EZVVFQThuWnc4NWZrWUFXM0FKUzJYSzRVVEYxRHFFdmFRbjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QytOLy9oUGJaSDNUOEovcVplOVdvcnlIdGpDWlJPMHJ5QXBLL2ppOUJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQaVNlTlhLaU5uM0RoRXBjOHRQS3VROTUxRVlvRzB6NytHSDBKUVAwMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVXcmloMFYvMHhTdWYwbDVTeGd2Wm8vbllndEkrV2c5c2FHdGwydU9Ga2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01OSXc5MDdQK0lTb3hJVkh1Skp2OG9QYjd6QlJuVmhMbldobXdpWTZXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ213aTBRNHJ6Wmc2WjFRY3FyNFJKdGUyMHc5czk4RGd0OWJvZVFoS3Noaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhpN1NwME0yWE9OOHFUTWg0Sy9PczhIbnd2bFNwVEUwa2dzRzlBZCthZ0VVdEg5QXJ5Ukx6UkhqdUR2R3B5WGdmQzc1TEdJL2tNMHlVdlNqYllycGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJxMU9xZlNPUWg5cGhnT2I1RXZucGM1TzdPcmw5bzZjZ090NlJFMlpkNUJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItdU5QUk5nRFFmbS1HMVpuanRBUDNnIiwicGhvbmVJZCI6ImQ4NTEwMTBiLWQ0ZmUtNDA1NS05MDI0LTZhZTA0MTc4MDIxMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmS0g2bWxRbElsS1lFU2QyTjN2cFBieWRyaE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSndJRzQyakc0aThTRVFaNlR4bFBsTjMvVXljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRISko0Rkc2IiwibWUiOnsiaWQiOiIyMzQ5MDU2NDc2NzI5OjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT28zczRCRU0yWGpMc0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWS1NrTitXSXFHdy81UEs0bE5ZTElkNDhiSUNWZzFyaXBOdzE3SUNNa1YwPSIsImFjY291bnRTaWduYXR1cmUiOiJkZ0hlZkVMT1BDMnZDM0ZhT0JOVEQ4N1RXLy9Mb0NuY25rck1ydko2Vy9oMmJUR2pwOEZUbHo2Sk5zTktIdXgzbWxBRkp5MUpBQ1RHYnl4czc1MkJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0lnZzRneVFwN05tNUh4cnF1RW9QbS9kUnp2YzhkYmc1bWh6ZnUxbk9QdFpPYnFvUDJ4QS92bmh0NWNaTklOOHhPS2pFTUIvNWtTVGRjTC9jWWdDaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDU2NDc2NzI5OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZTa3BEZmxpS2hzUCtUeXVKVFdDeUhlUEd5QWxZTmE0cVRjTmV5QWpKRmQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ1NDQzNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFNzIn0= || 'FLASH-MD-WA-BOT;;;=>',
    PREFIXES: (process.env.PREFIX || '').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254105915061",
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
    AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
    CHATBOT: process.env.CHAT_BOT || "off",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    A_REACT: process.env.AUTO_REACTION || 'on',
    L_S: process.env.STATUS_LIKE || 'on',
    AUTO_BLOCK: process.env.BLOCK_ALL || 'off',
    URL: process.env.MENU_LINKS || 'https://files.catbox.moe/c2jdkw.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'on',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || '',
    ADM: process.env.ANTI_DELETE || 'on',
    TZ: process.env.TIME_ZONE || 'Africa/Nairobi',
    DP: process.env.STARTING_MESSAGE || "on",
    ANTICALL: process.env.ANTICALL || 'on',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd"
        : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    W_M: null, // Add this line
};

// Watch for changes in this file and reload it automatically
const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updated ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
