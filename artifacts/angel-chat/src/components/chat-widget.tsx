import { useState, useEffect, useRef } from "react";
import { useCreateOpenaiConversation } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Clock, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "I can sense your energy... The Angels are already whispering. What would you like guidance on today?" }
  ]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const createConversation = useCreateOpenaiConversation();

  useEffect(() => {
    createConversation.mutate(
      { data: { title: "Angel Guidance" } },
      { onSuccess: (data) => setConversationId(data.id) }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !conversationId || isStreaming || timeLeft === 0) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsStreaming(true);

    try {
      const response = await fetch(`/api/openai/conversations/${conversationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: userMessage }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.replace("data: ", "").trim();
            if (!dataStr) continue;
            
            try {
              const data = JSON.parse(dataStr);
              if (data.done) {
                setIsStreaming(false);
              } else if (data.content) {
                setMessages((prev) => {
                  const newMessages = [...prev];
                  const lastMessage = newMessages[newMessages.length - 1];
                  lastMessage.content += data.content;
                  return newMessages;
                });
              }
            } catch (err) {
              console.error("Error parsing SSE JSON", err);
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_0_40px_rgba(255,215,0,0.1)] flex flex-col h-[600px] max-h-[80vh]"
      data-testid="chat-widget"
    >
      {/* Header */}
      <div className="p-4 border-b border-primary/10 bg-black/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 overflow-hidden">
              <img src="/seraphina.png" alt="Seraphina" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-card"></div>
          </div>
          <div>
            <h3 className="font-serif font-medium text-primary-foreground tracking-wide flex items-center gap-2">
              Seraphina <Sparkles className="w-3 h-3 text-primary" />
            </h3>
            <p className="text-xs text-primary/60">Live Medium</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono font-medium text-primary tracking-wider" data-testid="text-timer">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              key={idx}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              {msg.role === "assistant" && idx > 0 && (
                <span className="text-xs text-primary/50 ml-2 mb-1 font-serif italic">Seraphina</span>
              )}
              <div 
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-sm" 
                    : "bg-muted/50 border border-primary/10 text-foreground rounded-tl-sm leading-relaxed"
                }`}
                style={{ 
                  fontFamily: msg.role === "assistant" ? "var(--font-serif)" : "var(--font-sans)",
                  fontSize: msg.role === "assistant" ? "1.05rem" : "0.95rem"
                }}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isStreaming && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-primary/60 text-sm font-serif italic px-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Seraphina is channeling...
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black/20 border-t border-primary/10">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isStreaming || timeLeft === 0 || !conversationId}
            placeholder={timeLeft === 0 ? "Session ended" : "Ask for guidance..."}
            className="flex-1 bg-background/50 border-primary/20 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-full px-5"
            data-testid="input-chat"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
            disabled={isStreaming || !input.trim() || timeLeft === 0 || !conversationId}
            data-testid="button-send"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
