
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Mic, 
  Send, 
  MicOff, 
  Volume2,
  Bot,
  User
} from 'lucide-react';

interface AIWidgetProps {
  type: 'chat' | 'voice';
  contactName: string;
  testScore: number;
}

export default function AIWidget({ type, contactName, testScore }: AIWidgetProps) {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: `Hi ${contactName}! I've reviewed your test results (score: ${testScore}). I'm here to help you understand your cognitive profile and plan your next steps. How can I assist you today?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, {
      type: 'user',
      message: inputMessage
    }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        message: `Based on your score of ${testScore}, I can see you have strong analytical abilities. ${inputMessage.includes('improve') ? 'I recommend focusing on spatial reasoning exercises and timed cognitive challenges.' : 'Would you like me to explain any specific aspects of your results or provide personalized recommendations?'}`
      }]);
    }, 1000);
    
    setInputMessage('');
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // In a real app, this would start/stop voice recording
    if (!isListening) {
      // Simulate voice activation
      setTimeout(() => {
        setIsListening(false);
      }, 3000);
    }
  };

  const ChatWidget = () => (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
          AI Chat Assistant
        </CardTitle>
        <CardDescription>
          Get personalized insights about your test results
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isActive ? (
          <Button 
            onClick={() => setIsActive(true)}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Start Conversation
          </Button>
        ) : (
          <div className="space-y-3">
            {/* Message History */}
            <div className="h-48 overflow-y-auto space-y-2 border rounded-lg p-3 bg-slate-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-2 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white text-slate-800 border'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {msg.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-purple-600" />}
                      {msg.type === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <span>{msg.message}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about your results..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const VoiceWidget = () => (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <Volume2 className="h-5 w-5 mr-2 text-amber-600" />
          AI Voice Assistant
        </CardTitle>
        <CardDescription>
          Discuss your results with our advanced voice AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          {!isActive ? (
            <Button 
              onClick={() => setIsActive(true)}
              className="w-full bg-amber-600 hover:bg-amber-700"
            >
              <Mic className="mr-2 h-4 w-4" />
              Start Voice Session
            </Button>
          ) : (
            <>
              <div className="flex flex-col items-center space-y-4">
                <div className={`relative ${isListening ? 'animate-pulse' : ''}`}>
                  <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
                    isListening 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-amber-500 bg-amber-50'
                  }`}>
                    {isListening ? (
                      <MicOff className="h-8 w-8 text-red-600" />
                    ) : (
                      <Mic className="h-8 w-8 text-amber-600" />
                    )}
                  </div>
                  {isListening && (
                    <div className="absolute -inset-1 rounded-full border-2 border-red-500 animate-ping"></div>
                  )}
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-700">
                    {isListening ? 'Listening...' : 'Tap to speak'}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {isListening 
                      ? 'I can hear you. Release when done.' 
                      : 'Ask me anything about your test results'}
                  </p>
                </div>
                
                <Button 
                  onClick={toggleVoice}
                  variant={isListening ? "destructive" : "default"}
                  className={`w-full ${
                    isListening 
                      ? '' 
                      : 'bg-amber-600 hover:bg-amber-700'
                  }`}
                >
                  {isListening ? 'Stop Recording' : 'Press & Hold to Talk'}
                </Button>
              </div>
              
              {/* Simulated conversation status */}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-amber-600" />
                  <span className="text-sm text-amber-800">
                    "Based on your score of {testScore}, you show excellent analytical abilities. Would you like to discuss specific areas for improvement?"
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex justify-center">
      {type === 'chat' ? <ChatWidget /> : <VoiceWidget />}
    </div>
  );
}
