
import React from "react";

interface CreditCounterProps {
  credits: number;
  maxCredits: number;
  className?: string;
}

const CreditCounter: React.FC<CreditCounterProps> = ({ credits, maxCredits, className }) => {
  const percentage = (credits / maxCredits) * 100;
  const isLow = credits < maxCredits * 0.2;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">Créditos disponíveis</span>
        <span className={`text-sm font-semibold ${isLow ? "text-red-500" : "text-brand-purple"}`}>
          {credits}/{maxCredits}
        </span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${isLow ? "bg-red-500" : "bg-brand-purple"}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {isLow && (
        <p className="text-xs text-red-500 mt-1">Créditos baixos! Considere uma recarga.</p>
      )}
    </div>
  );
};

export default CreditCounter;
