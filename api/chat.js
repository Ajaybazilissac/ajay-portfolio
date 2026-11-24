const { handleChatRequest } = require("../backend/controllers/chatController");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  return handleChatRequest(req, res);
};
