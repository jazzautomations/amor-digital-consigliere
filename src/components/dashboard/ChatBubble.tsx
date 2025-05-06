
import React from "react";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  isUser: boolean;
  message: string;
  timestamp?: string;
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ isUser, message, timestamp, className }) => {
  return (
    <div 
      className={cn(
        "flex mb-4",
        isUser ? "justify-end" : "justify-start",
        className
      )}
    >
      <div 
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isUser 
            ? "bg-brand-purple text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        )}
      >
        <p className="whitespace-pre-wrap break-words">{message}</p>
        {timestamp && (
          <div className={cn(
            "text-xs mt-1 text-right",
            isUser ? "text-gray-200" : "text-gray-500"
          )}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
