"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatPage({ params }: { params: Promise<{ city: string }> }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [city, setCity] = useState(""); // Declare city state variable
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setCity(resolvedParams.city);
    };
    fetchData();
  }, [params]);

  const sendMessage = async () => {
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("API Response:", data); // Log the response to the console
      setResponse(data.answer);
    } catch (error) {
      console.error("Error fetching from AI API:", error);
      setResponse("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">AI Tour Guide - {city}</h1>
      <input
        className="border p-2 w-full mt-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Ask about ${city}...`}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={sendMessage}
      >
        Send
      </button>
      <p className="mt-4">Response: {response}</p> 
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-2"
        onClick={() => router.push("/map")}
      >
        Back to Map
      </button>
    </div>
  );
}