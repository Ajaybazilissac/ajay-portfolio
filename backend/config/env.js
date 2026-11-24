require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  openRouterApiKey: process.env.OPENROUTER_API_KEY || '',
  openRouterModel: process.env.OPENROUTER_MODEL || 'qwen/qwen-2.5-72b-instruct:free',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
};
