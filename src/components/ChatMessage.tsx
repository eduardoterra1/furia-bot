
import { useState } from 'react';
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

const ChatMessage = ({ message, isBot, animate = false }: ChatMessageProps) => {
  const [isAnimating] = useState(animate);
  
  return (
    <div
      className={cn(
        "chat-bubble",
        isBot ? "chat-bubble-bot text-white" : "chat-bubble-user",
        isAnimating && "animate-fade-in"
      )}
    >
      <p className="whitespace-pre-line">{message}</p>
    </div>
  );
};

export default ChatMessage;
