
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface TriviaQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  onNextQuestion: () => void;
}

const TriviaQuestion = ({ question, options, correctAnswer, explanation, onNextQuestion }: TriviaQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Escolha uma opção",
        description: "Você precisa selecionar uma resposta!",
        variant: "destructive"
      });
      return;
    }
    
    setShowExplanation(true);
    
    if (selectedAnswer === correctAnswer) {
      toast({
        title: "ACERTOU! 🎯",
        description: "Você é um verdadeiro fã da FURIA!",
        variant: "default"
      });
    } else {
      toast({
        title: "ERROU! 😬",
        description: "Continue tentando, você consegue na próxima!",
        variant: "destructive"
      });
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    onNextQuestion();
  };
  
  return (
    <Card className="furia-card p-5 text-white">
      <h3 className="text-xl font-gaming text-furia-secondary mb-4">Trivia da FURIA</h3>
      
      <p className="mb-6 text-lg">{question}</p>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className={`w-full justify-start text-left ${
              showExplanation
                ? index === correctAnswer
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : selectedAnswer === index
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-transparent"
                : selectedAnswer === index
                ? "bg-furia-secondary hover:bg-furia-secondary/90 text-white"
                : "bg-transparent hover:bg-furia-secondary/20"
            }`}
            onClick={() => !showExplanation && setSelectedAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
      
      {showExplanation ? (
        <div className="space-y-4">
          <div className="p-3 bg-furia-primary/80 border border-furia-secondary rounded-md">
            <p className="font-medium">{explanation}</p>
          </div>
          <Button className="w-full bg-furia-secondary hover:bg-furia-secondary/90" onClick={handleNextQuestion}>
            Próxima Pergunta
          </Button>
        </div>
      ) : (
        <Button className="w-full bg-furia-accent hover:bg-furia-accent/80" onClick={handleSubmit}>
          Enviar Resposta
        </Button>
      )}
    </Card>
  );
};

export default TriviaQuestion;
