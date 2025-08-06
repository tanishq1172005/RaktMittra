import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      const userMessage = { sender: "You", text: input };
      setMessages((prev) => [...prev, userMessage]);

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `You are an educational assistant for Thalassemia and blood donation. 
        Provide concise, helpful information about ${input}. 
        Keep responses under 3 sentences when possible.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const botMessage = { sender: "AI", text: text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [...prev, {
        sender: "AI",
        text: "Sorry, I'm having trouble connecting. Please try again."
      }]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        💬Ask Queries
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">RaktMittra AI</h2>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          {messages.map((msg, i) => (
            <p
              key={i}
              className={`mb-2 p-2 rounded ${
                msg.sender === "You" 
                  ? "bg-blue-100 text-blue-800" 
                  : "bg-red-100 text-red-800"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
          {isLoading && (
            <p className="text-gray-500 italic">AI is thinking...</p>
          )}
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            className="flex-1 border p-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Thalassemia..."
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            className={`px-4 rounded ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-red-600 hover:bg-red-700"
            } text-white`}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}