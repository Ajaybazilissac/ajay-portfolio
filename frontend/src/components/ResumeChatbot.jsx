import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X, MessageSquare, Send, Bot, User } from "lucide-react";
import { THEME } from "../config/theme";
import { SUGGESTED_QUESTIONS } from "../models/portfolioModel";
import { askPortfolioAssistant } from "../services/chatService";

export default function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Zara, Ajay's AI Resume Assistant. Ask me anything about his AI/ML projects, Hybrid RAG systems, Full-Stack MERN work, experience, or education!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const sendMessage = async (questionText) => {
    const trimmed = questionText.trim();
    if (!trimmed || isTyping) return;

    const updatedHistory = [...messages, { role: "user", text: trimmed }];
    setMessages(updatedHistory);
    setInput("");
    setIsTyping(true);

    try {
      const data = await askPortfolioAssistant(trimmed, updatedHistory);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.reply ||
            "I could not retrieve a response right now. Please try again!",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to reach the backend server. Ensure the Express backend is running on port 5000, or email Ajay at ajaybazilissac93@gmail.com.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            backgroundColor: THEME.card,
            border: `1px solid ${THEME.border}`,
            maxHeight: "520px",
          }}
        >
          <div
            className="px-4 py-3.5 flex items-center justify-between text-white shrink-0"
            style={{ background: THEME.gradient }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Ask Zara</div>
                <div className="text-[11px] text-white/85 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>Grounded in 2 Resumes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 text-sm"
            style={{ backgroundColor: THEME.bgSubtle, minHeight: "250px" }}
          >
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white"
                      style={{ background: THEME.gradient }}
                    >
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className="rounded-2xl px-3.5 py-2.5 max-w-[82%] leading-relaxed whitespace-pre-line text-xs sm:text-[13px] shadow-2xs"
                    style={
                      isUser
                        ? {
                            background: THEME.gradient,
                            color: "#FFFFFF",
                            borderBottomRightRadius: "4px",
                          }
                        : {
                            backgroundColor: THEME.card,
                            color: THEME.text,
                            border: `1px solid ${THEME.border}`,
                            borderBottomLeftRadius: "4px",
                          }
                    }
                  >
                    {msg.text}
                  </div>

                  {isUser && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: THEME.accentSoft,
                        color: THEME.accent,
                      }}
                    >
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ background: THEME.gradient }}
                >
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div
                  className="px-3.5 py-2.5 rounded-2xl text-xs flex items-center gap-1"
                  style={{
                    backgroundColor: THEME.card,
                    border: `1px solid ${THEME.border}`,
                    color: THEME.textMuted,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div
            className="px-3 py-2 flex gap-1.5 overflow-x-auto shrink-0"
            style={{
              backgroundColor: THEME.card,
              borderTop: `1px solid ${THEME.border}`,
            }}
          >
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                disabled={isTyping}
                className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors cursor-pointer hover:opacity-80 disabled:opacity-50"
                style={{
                  backgroundColor: THEME.accentSoft,
                  color: THEME.accent,
                }}
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-2.5 flex items-center gap-2 shrink-0"
            style={{
              backgroundColor: THEME.card,
              borderTop: `1px solid ${THEME.border}`,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, RAG, MERN, roles..."
              className="flex-1 text-xs sm:text-sm px-3 py-2 rounded-xl outline-none"
              style={{
                backgroundColor: THEME.bgSubtle,
                color: THEME.text,
                border: `1px solid ${THEME.border}`,
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-xl text-white transition-opacity disabled:opacity-40 cursor-pointer shrink-0"
              style={{ background: THEME.gradient }}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full text-white font-semibold text-sm shadow-lg transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
        style={{ background: THEME.gradient }}
        aria-label="Open AI Resume Assistant"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4" />
            <span>Close Chat</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4" />
            <span>Ask AI About Ajay</span>
          </>
        )}
      </button>
    </div>
  );
}
