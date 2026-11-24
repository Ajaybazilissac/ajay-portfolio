/**
 * ROUTES: API Endpoints
 */
const express = require('express');
const { handleChatRequest } = require('../controllers/chatController');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Ajay Portfolio MVC Backend' });
});

router.post('/chat', handleChatRequest);

module.exports = router;
