/**
 * CONTROLLER: Chat Controller
 * Validates incoming user prompts, queries OpenRouter using the Resume Knowledge Base,
 * enforces concise 2-3 sentence replies without exposing reasoning chains,
 * and gracefully falls back to the local resume matcher if needed.
 */

const config = require("../config/env");
const {
  RESUME_KNOWLEDGE_BASE,
  generateFallbackResponse,
} = require("../models/resumeModel");

/**
 * Handles POST /api/chat requests from the React frontend.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function handleChatRequest(req, res) {
  try {
    const { message, history = [] } = req.body || {};

    // Validate incoming message payload
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message text is required." });
    }

    const trimmedMessage = message.trim();

    // Use local deterministic resume responder if no API key is configured
    if (!config.openRouterApiKey) {
      return res.json({
        reply: generateFallbackResponse(trimmedMessage),
        source: "local-knowledge-base",
      });
    }

    // Strict instruction to keep answers short, direct, and grounded in Ajay's resumes
    const systemPrompt = `You are Zara,the official AI Portfolio Assistant for Ajay Bazil Issac . Answer visitor questions strictly using the provided Resume Knowledge Base below. Keep every answer very concise, friendly, and simple (maximum 2 to 3 short sentences or 3 brief bullet points—never output long paragraphs, internal thinking, or markdown asterisks like ** or *). Use plain text only. If something is not in his resume, politely say so and share his email (ajaybazilissac93@gmail.com).\n\nKNOWLEDGE BASE:\n${RESUME_KNOWLEDGE_BASE}`;

    // Keep only the last 6 conversation turns for lightweight context
    const safeHistory = Array.isArray(history)
      ? history.slice(-6).map((item) => ({
          role: item.role === "assistant" ? "assistant" : "user",
          content: String(item.text || item.content || ""),
        }))
      : [];

    // Try configured model first, then reliable free instruction models
    const candidateModels = Array.from(
      new Set([
        config.openRouterModel,
        "meta-llama/llama-3.3-70b-instruct:free",
        "google/gemma-3-27b-it:free",
        "openrouter/free",
      ]),
    );

    let replyText = "";
    let lastError = "Empty content from OpenRouter";

    for (const modelName of candidateModels) {
      const openRouterResponse = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${config.openRouterApiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": config.clientOrigin,
            "X-Title": "Ajay Bazil Issac Portfolio MVC Backend",
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: "system", content: systemPrompt },
              ...safeHistory,
              { role: "user", content: trimmedMessage },
            ],
            temperature: 0.3,
            max_tokens: 1024,
          }),
        },
      );

      if (!openRouterResponse.ok) {
        const errorText = await openRouterResponse.text();
        lastError = `OpenRouter (${modelName}) status ${openRouterResponse.status}: ${errorText}`;
        continue;
      }

      const data = await openRouterResponse.json();
      const content = data?.choices?.[0]?.message?.content;

      if (content && content.trim()) {
        // Strip any stray markdown bold/italic asterisks so responses render as clean plain text
        replyText = content
          .replace(/\*\*/g, "")
          .replace(/^\s*\*\s+/gm, "• ")
          .trim();
        break;
      }
    }

    if (!replyText) {
      throw new Error(lastError);
    }

    return res.json({
      reply: replyText,
      source: "openrouter",
    });
  } catch (error) {
    console.warn("[ChatController Fallback]:", error.message);
    const fallbackReply = generateFallbackResponse(
      req.body?.message || "",
    ).replace(/\*\*/g, "");
    return res.json({
      reply: fallbackReply,
      source: "fallback-knowledge-base",
    });
  }
}

module.exports = { handleChatRequest };
