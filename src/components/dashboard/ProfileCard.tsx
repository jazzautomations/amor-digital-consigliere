
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileCardProps {
  name: string;
  handle: string;
  profileImage?: string;
  interests?: string[];
  tone?: string;
  onAnalyze?: () => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  handle,
  profileImage,
  interests,
  tone,
  onAnalyze,
  className,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-white">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback className="bg-white text-brand-purple">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-gray-100">
              @{handle}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {(interests || tone) ? (
          <div className="space-y-3">
            {interests && (
              <div>
                <h4 className="font-semibold text-sm text-gray-500 mb-1">Interesses</h4>
                <div className="flex flex-wrap gap-1">
                  {interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-brand-soft-purple text-brand-purple-dark px-2 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {tone && (
              <div>
                <h4 className="font-semibold text-sm text-gray-500 mb-1">Tom de comunicação</h4>
                <p className="text-sm">{tone}</p>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={onAnalyze}
            className="w-full py-2 bg-brand-purple text-white rounded-md hover:bg-brand-purple-dark transition"
          >
            Analisar perfil
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
