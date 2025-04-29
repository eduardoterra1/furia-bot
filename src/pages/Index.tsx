
import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Gamepad, MessageSquare, Trophy, Users, HelpCircle } from "lucide-react";

import ChatMessage from "@/components/ChatMessage";
import PlayerCard from "@/components/PlayerCard";
import MatchStatusCard from "@/components/MatchStatusCard";
import TriviaQuestion from "@/components/TriviaQuestion";
import AICheerGenerator from "@/components/AICheerGenerator";

import { furiaPlayers, matchStatuses, triviaQuestions, botResponses, warCries } from '@/data/furiaData';

const Index = () => {
  const { toast } = useToast();
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{text: string; isBot: boolean}[]>([
    {text: "Fala galera da FURIA! GG é nós que tá! 🔥 Bora trocar uma ideia ou falar das partidas? Tô aqui pra dar aquele hype no chat!", isBot: true}
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatInput.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, {text: chatInput, isBot: false}]);
    setChatInput("");
    setLoading(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      // Generate a bot response based on user message
      let botResponse = "";
      const userMessage = chatInput.toLowerCase();
      
      if (userMessage.includes("oi") || userMessage.includes("olá") || userMessage.includes("e aí") || userMessage.includes("salve")) {
        botResponse = botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
      } else if (userMessage.includes("ganhou") || userMessage.includes("vitória") || userMessage.includes("vencer")) {
        botResponse = botResponses.matchWin[Math.floor(Math.random() * botResponses.matchWin.length)];
      } else if (userMessage.includes("perdeu") || userMessage.includes("derrota") || userMessage.includes("perder")) {
        botResponse = botResponses.matchLoss[Math.floor(Math.random() * botResponses.matchLoss.length)];
      } else if (userMessage.includes("clutch") || userMessage.includes("ace") || userMessage.includes("jogada")) {
        botResponse = botResponses.clutchMoments[Math.floor(Math.random() * botResponses.clutchMoments.length)];
      } else if (userMessage.includes("meme") || userMessage.includes("engraçado")) {
        botResponse = botResponses.memes[Math.floor(Math.random() * botResponses.memes.length)];
      } else if (userMessage.includes("fallen") || userMessage.includes("gabriel")) {
        botResponse = botResponses.playerPraise.FalleN[Math.floor(Math.random() * botResponses.playerPraise.FalleN.length)];
      } else if (userMessage.includes("yuurih") || userMessage.includes("yuri")) {
        botResponse = botResponses.playerPraise.yuurih[Math.floor(Math.random() * botResponses.playerPraise.yuurih.length)];
      } else if (userMessage.includes("kscerato") || userMessage.includes("kaike")) {
        botResponse = botResponses.playerPraise.KSCERATO[Math.floor(Math.random() * botResponses.playerPraise.KSCERATO.length)];
      } else if (userMessage.includes("molodoy") || userMessage.includes("danil")) {
        botResponse = botResponses.playerPraise.MOLODOY[Math.floor(Math.random() * botResponses.playerPraise.MOLODOY.length)];
      } else if (userMessage.includes("yekindar") || userMessage.includes("mareks")) {
        botResponse = botResponses.playerPraise.YEKINDAR[Math.floor(Math.random() * botResponses.playerPraise.YEKINDAR.length)];
      } else if (userMessage.includes("coach") || userMessage.includes("sidde")) {
        botResponse = botResponses.playerPraise.Sidde[Math.floor(Math.random() * botResponses.playerPraise.Sidde.length)];
      } else if (userMessage.includes("grito") || userMessage.includes("guerra")) {
        botResponse = `Olha só esse grito da massa:\n\n"${warCries[Math.floor(Math.random() * warCries.length)].text}"`;
      } else {
        botResponse = botResponses.randomResponses[Math.floor(Math.random() * botResponses.randomResponses.length)];
      }
      
      // Add bot message
      setChatMessages(prev => [...prev, {text: botResponse, isBot: true}]);
      setLoading(false);
      
      // Show toast for certain keywords
      if (userMessage.includes("melhor") || userMessage.includes("top")) {
        toast({
          title: "FURIA É O MELHOR!",
          description: "Sem dúvida o time mais apaixonante do CS!",
        });
      }
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-furia-primary via-furia-primary to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="font-gaming text-4xl md:text-5xl furia-text-gradient animate-pulse-furia">
            FURIA BOT
          </h1>
        </div>
        
        {/* Main Content */}
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid grid-cols-5 w-full bg-furia-primary border border-furia-secondary">
            <TabsTrigger value="chat" className="flex gap-2 items-center">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
            
            <TabsTrigger value="matches" className="flex gap-2 items-center">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Partidas</span>
            </TabsTrigger>
            
            <TabsTrigger value="players" className="flex gap-2 items-center">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Players</span>
            </TabsTrigger>
            
            <TabsTrigger value="trivia" className="flex gap-2 items-center">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Trivia</span>
            </TabsTrigger>
            
            <TabsTrigger value="ai" className="flex gap-2 items-center">
              <Gamepad className="h-4 w-4" />
              <span className="hidden sm:inline">Modo I.A</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Chat Tab */}
          <TabsContent value="chat" className="border border-furia-secondary rounded-md mt-2">
            <Card className="bg-furia-primary border-none">
              <CardContent className="p-4">
                <div className="flex flex-col h-[calc(100vh-250px)]">
                  <ScrollArea className="flex-1 pr-4 mb-4">
                    <div className="flex flex-col">
                      {chatMessages.map((msg, index) => (
                        <ChatMessage 
                          key={index} 
                          message={msg.text} 
                          isBot={msg.isBot} 
                          animate={index === chatMessages.length - 1} 
                        />
                      ))}
                      {loading && (
                        <div className="chat-bubble chat-bubble-bot">
                          <div className="flex gap-1">
                            <span className="animate-bounce">•</span>
                            <span className="animate-bounce delay-75">•</span>
                            <span className="animate-bounce delay-150">•</span>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="bg-furia-primary/60 border-furia-secondary text-white"
                    />
                    <Button 
                      type="submit" 
                      disabled={loading} 
                      className="bg-furia-secondary hover:bg-furia-secondary/90"
                    >
                      Enviar
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Matches Tab */}
          <TabsContent value="matches" className="mt-2">
            <div className="grid gap-6">
              <h2 className="font-gaming text-2xl text-furia-secondary">Status das Partidas</h2>
              
              {matchStatuses.map((match, index) => (
                <MatchStatusCard key={index} {...match} />
              ))}
            </div>
          </TabsContent>
          
          {/* Players Tab */}
          <TabsContent value="players" className="mt-2">
            <h2 className="font-gaming text-2xl text-furia-secondary mb-6">Players da FURIA</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {furiaPlayers.map((player, index) => (
                <PlayerCard key={index} {...player} />
              ))}
            </div>
          </TabsContent>
          
          {/* Trivia Tab */}
          <TabsContent value="trivia" className="mt-2">
            <TriviaQuestion
              {...triviaQuestions[currentQuestionIndex]}
              onNextQuestion={() => setCurrentQuestionIndex((prev) => (prev + 1) % triviaQuestions.length)}
            />
          </TabsContent>
          
          {/* AI Tab */}
          <TabsContent value="ai" className="mt-2">
            <AICheerGenerator />
          </TabsContent>
        </Tabs>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <Separator className="mb-4 bg-furia-secondary/30" />
          <p className="text-sm text-gray-400">
            FURIA Bot Zica Dima &copy; 2025 - O chat bot mais fanático da FURIA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
