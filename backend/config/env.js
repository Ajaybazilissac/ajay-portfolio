try {
  require("dotenv").config();
} catch (_err) {
  // On Vercel, environment variables are injected automatically via process.env
}

module.exports = {
  port: process.env.PORT || 5000,
  openRouterApiKey: process.env.OPENROUTER_API_KEY || "",
  openRouterModel:
    process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free",
  clientOrigin:
    process.env.CLIENT_ORIGIN || "https://ajay-portfolio-five-zeta.vercel.app",
};
