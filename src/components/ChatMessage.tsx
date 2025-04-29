
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

const ChatMessage = ({ message, isBot, animate = false }: ChatMessageProps) => {
  const [isAnimating] = useState(animate);
  
  return (
    <div className="flex items-start gap-2 mb-4">
      {isBot && (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarImage src="/lovable-uploads/53b3c46f-6648-4fb2-b79d-3917b15608a8.png" alt="FURIA Logo" />
          <AvatarFallback className="bg-black border border-furia-secondary">F</AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "chat-bubble",
          isBot ? "chat-bubble-bot text-white" : "chat-bubble-user ml-auto",
          isAnimating && "animate-fade-in"
        )}
      >
        <p className="whitespace-pre-line">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
