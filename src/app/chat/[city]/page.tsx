"use client";

import { useState, useEffect, useRef } from "react";
import { cityData } from "@/app/data/cityData";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/navbar";
import { CityAttraction } from "@/app/data/cityInterfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPaperPlane,
  faCircleNotch,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAttraction, setSelectedAttraction] =
    useState<CityAttraction | null>(null);
  const params = useParams();
  const city = params.city as string;

  // Add type checking for the city
  const getCities = () => Object.keys(cityData);
  if (!city || !getCities().includes(city.toLowerCase())) {
    throw new Error(`City ${city} not found`);
  }

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          cityData: cityData[city.toLowerCase()],
        }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setSelectedAttraction(null); // Remove overlay after response
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "Sorry, there was an error processing your request. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttractionClick = (attraction: CityAttraction) => {
    setSelectedAttraction(attraction);
    sendMessage(
      `Tell me more about ${attraction.name} in ${
        cityData[city.toLowerCase()].name
      }`
    );
  };

  useEffect(() => {
    // Add initial welcome message
    const initialMessage: Message = {
      role: "assistant",
      content: `Welcome to ${
        cityData[city.toLowerCase()].name
      }! How can I help you today?`,
    };
    setMessages([initialMessage]);
  }, [city]);

  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add gradient animation styles
  const styles = `
  @keyframes pulse-slow {
    0% { opacity: 0.4; }
    50% { opacity: 0.6; }
    100% { opacity: 0.4; }
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 0.8; }
    100% { opacity: 0.6; }
  }

  .animate-pulse {
    animation: pulse 2s infinite;
  }

  @keyframes gradient {
    0% { 
      background-position: 0% 50%;
    }
    50% { 
      background-position: 100% 50%;
    }
    100% { 
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  `;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [styles]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-black">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="w-10/12">
                <h1 className="text-3xl font-bold mb-2 text-primary">
                  {cityData[city.toLowerCase()].name}
                </h1>
                <p className="text-gray-700">
                  {cityData[city.toLowerCase()].description}
                </p>
              </div>
              <Link href="/map" className="text-white hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </Link>
            </div>

            {/* Chat Messages */}
            <div
              className="relative bg-[#F0F0F0] rounded-lg p-6 mb-8 h-auto min-h-[300px] max-h-[600px] overflow-y-auto chat-box"
              style={{
                boxShadow:
                  "inset 0 1px 10px rgba(0,0,0,0.2), inset 0 -1px 10px rgba(0,0,0,0.2)",
              }}
              ref={chatBoxRef}
            >
              <div className="space-y-4 h-full">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } items-start gap-3`}
                  >
                    {message.role === "assistant" && (
                      <div className="relative -top-0">
                        <div className="flex items-center justify-start mb-4">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={faRobot}
                                className="text-white w-6 h-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-primary text-white shadow-lg"
                          : "bg-background/80 text-black shadow-lg"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code({ className, children, ...props }) {
                              const match = /language-(\w+)/.exec(
                                className || ""
                              );
                              return match ? (
                                <div className="bg-gray-100 rounded-lg p-3 mt-2">
                                  <pre className="whitespace-pre-wrap">
                                    <code className={className} {...props}>
                                      {String(children).replace(
                                        /[\u00A0-\u9999<>]/g,
                                        (i) => `&#${i.charCodeAt(0)};`
                                      )}
                                    </code>
                                  </pre>
                                </div>
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              );
                            },
                            a({ className, children, ...props }) {
                              return (
                                <a
                                  className={`text-blue-500 hover:text-blue-700 underline ${
                                    className || ""
                                  }`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  {...props}
                                >
                                  {children}
                                </a>
                              );
                            },
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-lg px-4 py-2 bg-primary/80 flex items-center space-x-2">
                      <div className="animate-spin">
                        <FontAwesomeIcon
                          icon={faCircleNotch}
                          className="text-primary w-6 h-6"
                        />
                      </div>
                      <span className="text-white">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Keyword Cards */}
            <div className="mb-3 flex flex-wrap gap-4 justify-center py">
              {[
                "History",
                "Culture",
                "Attractions",
                "Food",
                "Events",
                "Transport",
                "Shopping",
                "Weather",
              ].map((keyword) => (
                <div
                  key={keyword}
                  className="relative group w-24 h-10 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-medium cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setInput(keyword);
                    sendMessage(keyword);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="relative z-10">{keyword}</div>
                </div>
              ))}
            </div>

            {/* Input Section */}
            <div className="bg-[#F0F0F0] rounded-lg p-4">
              <div className="flex space-x-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Send a message..."
                  className="flex-1 bg-background rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary resize-none h-10"
                  rows={1}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  className="bg-primary cursor-pointer text-white rounded-lg px-4 py-2 hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="animate-spin">
                      <FontAwesomeIcon
                        icon={faCircleNotch}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  ) : (
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-white w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Popular Attractions */}
            <div className="mt-8">
              <h2 className="text-3xl text-primary font-semibold mb-4">
                Popular Attractions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(cityData[city.toLowerCase()].attractions)
                  .flatMap((category) => category || [])
                  .map((attraction: CityAttraction, index) => (
                    <button
                      key={index}
                      onClick={() => handleAttractionClick(attraction)}
                      className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <div className="absolute inset-0 bg-foreground"></div>
                      <div className="absolute inset-0 bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/40 animate-pulse-slow"></div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative p-6">
                        <h3 className="text-xl text-white font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {attraction.name}
                        </h3>
                        {attraction.description && (
                          <p className="text-white mb-4">
                            {attraction.description.substring(0, 100)}...
                          </p>
                        )}

                        {selectedAttraction?.name === attraction.name && (
                          <div className="absolute h-full inset-0 bg-black/50 flex items-center justify-center">
                            <div className="animate-pulse">
                              <FontAwesomeIcon
                                icon={faMicrochip}
                                className="text-primary w-12 h-12"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
