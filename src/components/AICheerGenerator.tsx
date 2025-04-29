
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { generateRandomWarCry, botResponses } from '@/data/furiaData';

const AICheerGenerator = () => {
  const [generatedCheer, setGeneratedCheer] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [introText, setIntroText] = useState<string | null>(null);
  
  const handleGenerateCheer = () => {
    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      const randomIntro = botResponses.aiCheerGenerator[
        Math.floor(Math.random() * botResponses.aiCheerGenerator.length)
      ];
      
      setIntroText(randomIntro);
      setGeneratedCheer(generateRandomWarCry());
      setIsGenerating(false);
    }, 1500);
  };
  
  return (
    <Card className="furia-card p-5 text-white">
      <h3 className="text-xl font-gaming text-furia-secondary mb-4">Gerador de Gritos de Guerra</h3>
      
      <p className="mb-6">
        Deixe nossa I.A. gamer criar gritos de guerra épicos para você apoiar a FURIA durante as partidas!
      </p>
      
      <div className="flex justify-center mb-6">
        <Button
          onClick={handleGenerateCheer}
          disabled={isGenerating}
          className="bg-gradient-to-r from-furia-secondary to-furia-accent hover:opacity-90 text-white py-6 px-6 rounded-md transition-all transform hover:scale-105"
        >
          {isGenerating ? (
            <div className="flex items-center">
              <span className="animate-bounce">•</span>
              <span className="animate-bounce delay-75">•</span>
              <span className="animate-bounce delay-150">•</span>
              <span className="ml-2">Gerando</span>
            </div>
          ) : (
            "Gerar Grito de Guerra!"
          )}
        </Button>
      </div>
      
      {generatedCheer && (
        <div className="space-y-4 animate-fade-in">
          <p className="text-furia-accent text-sm">{introText}</p>
          
          <div className="p-4 bg-furia-primary border-2 border-furia-secondary rounded-md">
            <p className="font-gaming text-center text-lg text-furia-secondary">{generatedCheer}</p>
          </div>
          
          <div className="flex justify-center gap-3">
            <Button variant="outline" className="border-furia-accent text-furia-accent hover:bg-furia-accent hover:text-white">
              Copiar
            </Button>
            <Button className="bg-furia-secondary hover:bg-furia-secondary/90" onClick={handleGenerateCheer}>
              Gerar Outro
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default AICheerGenerator;
