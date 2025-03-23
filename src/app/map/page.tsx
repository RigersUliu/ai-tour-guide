"use client";
import { useRouter } from 'next/navigation';

export default function MapPage() {
  const router = useRouter();
  const cities = ["shkodra", "tirana", "vlora"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Select a City</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => router.push(`/chat/${city}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}