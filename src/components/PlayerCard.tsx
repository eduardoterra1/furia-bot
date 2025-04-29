
import { useState } from 'react';
import { Card } from "@/components/ui/card";

interface PlayerCardProps {
  nickname: string;
  realName: string;
  role: string;
  image: string;
  stats: {
    rating: number;
    killsPerRound: number;
    headshotPercentage: number;
  };
  funFact: string;
}

const PlayerCard = ({ nickname, realName, role, image, stats, funFact }: PlayerCardProps) => {
  const [showStats, setShowStats] = useState(false);
  
  return (
    <Card className="furia-card overflow-hidden relative transition-all duration-300 transform hover:scale-105">
      <div className="p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-gaming text-furia-secondary">{nickname}</h3>
          <span className="bg-furia-secondary text-white px-2 py-1 rounded text-xs">{role}</span>
        </div>
        
        <p className="text-sm text-gray-300 mb-4">{realName}</p>
        
        <div className="w-full h-32 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
          <img src={image} alt={nickname} className="h-full object-contain" />
        </div>
        
        <button 
          onClick={() => setShowStats(!showStats)}
          className="w-full bg-furia-secondary hover:bg-opacity-80 text-white py-2 rounded-md mb-3 transition-colors"
        >
          {showStats ? "Mostrar Curiosidade" : "Ver Estatísticas"}
        </button>
        
        {showStats ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Rating 2.0:</span>
              <span className="font-bold">{stats.rating}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">K/R:</span>
              <span className="font-bold">{stats.killsPerRound}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">HS%:</span>
              <span className="font-bold">{stats.headshotPercentage}%</span>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-gradient-to-r from-furia-primary to-furia-secondary bg-opacity-30 rounded-md">
            <p className="italic text-sm">"{funFact}"</p>
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 h-12 w-12 bg-furia-accent rotate-45 translate-x-6 -translate-y-6"></div>
    </Card>
  );
};

export default PlayerCard;
