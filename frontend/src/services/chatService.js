/**
 * SERVICE: Frontend API Client for MVC Backend (/api/chat)
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function askPortfolioAssistant(message, history) {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history })
  });

  if (!response.ok) {
    throw new Error(`Backend API error: ${response.status}`);
  }

  return response.json();
}
