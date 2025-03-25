"use client";

import { useState, useEffect } from 'react';
import { cityData } from '@/app/data/cityData';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/navbar';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const city = params.city as string;

  // Add type checking for the city
  const getCities = () => Object.keys(cityData);
  if (!city || !getCities().includes(city.toLowerCase())) {
    throw new Error(`City ${city} not found`);
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          cityData: cityData[city.toLowerCase()]
        }),
      });

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Add initial welcome message
    const initialMessage: Message = {
      role: 'assistant',
      content: `Welcome to ${cityData[city.toLowerCase()].name}! How can I help you today?`
    };
    setMessages([initialMessage]);
  }, [city]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">{cityData[city.toLowerCase()].name}</h1>
                <p className="text-gray-400">{cityData[city.toLowerCase()].description}</p>
              </div>
              <Link href="/" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>

            {/* Chat Messages */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === 'user'
                          ? 'bg-blue-500'
                          : 'bg-gray-700'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-lg px-4 py-2 bg-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-blob"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-blob delay-150"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-blob delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>

            {/* City Information */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData[city.toLowerCase()].attractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{attraction.name}</h3>
                    <p className="text-gray-400">{attraction.description}</p>
                    <p className="text-sm text-gray-400 mt-2">{attraction.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* City Tips */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Travel Tips</h2>
              <div className="space-y-4">
                {cityData[city.toLowerCase()].tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-gray-400">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Add CSS for the blob animation
const styles = `
@keyframes blob {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 1s ease-in-out infinite;
}
`;

// Inject the styles into the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}