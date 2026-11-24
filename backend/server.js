/**
 * SERVER ENTRY POINT: Express MVC Application
 */
const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors({ origin: config.clientOrigin }));
app.use(express.json({ limit: '1mb' }));

// Mount MVC API Routes
app.use('/api', chatRoutes);

app.listen(config.port, () => {
  console.log(`MVC Backend running on http://localhost:${config.port}`);
});
