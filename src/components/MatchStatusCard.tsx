
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MatchStatusCardProps {
  opponent: string;
  map: string;
  score: {
    furia: number;
    opponent: number;
  };
  status: "upcoming" | "live" | "finished";
  date: string;
}

const MatchStatusCard = ({ opponent, map, score, status, date }: MatchStatusCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  
  return (
    <Card className={cn(
      "furia-card overflow-hidden relative p-4 text-white",
      status === "live" && "border-furia-accent glow-effect"
    )}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-gaming text-lg text-furia-secondary">FURIA vs {opponent}</h3>
        <div className={cn(
          "px-2 py-1 rounded text-xs font-bold",
          status === "live" ? "bg-red-600 animate-pulse" : 
          status === "upcoming" ? "bg-furia-secondary" : "bg-gray-600"
        )}>
          {status === "live" ? "AO VIVO" : status === "upcoming" ? "EM BREVE" : "FINALIZADO"}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-300">Mapa: <span className="text-white font-medium">{map}</span></div>
        <div className="text-sm text-gray-300">{formattedDate}</div>
      </div>
      
      <div className="bg-gradient-to-r from-furia-primary to-furia-accent bg-opacity-30 p-4 rounded-md">
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col items-center">
            <img src="furia.png" alt="FURIA" className="w-12 h-12 object-contain" />
            <span className="font-bold mt-1">FURIA</span>
          </div>
          
          <div className="flex gap-2 items-center">
            <span className={cn("text-2xl font-gaming", 
              score.furia > score.opponent ? "text-furia-secondary" : "text-white"
            )}>
              {score.furia}
            </span>
            <span className="text-lg">:</span>
            <span className={cn("text-2xl font-gaming", 
              score.opponent > score.furia ? "text-red-500" : "text-white"
            )}>
              {score.opponent}
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <img src="navi.png" alt={opponent} className="w-12 h-12 object-contain" />
            <span className="font-bold mt-1">{opponent}</span>
          </div>
        </div>
      </div>
      
      {status === "live" && (
        <div className="mt-3 text-center text-sm text-furia-accent animate-pulse-furia">
          <a href="https://furia.gg" target="_blank">🔴 Assistir agora!</a>
        </div>
      )}
    </Card>
  );
};

export default MatchStatusCard;
