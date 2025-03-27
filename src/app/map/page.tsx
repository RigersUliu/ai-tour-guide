"use client";
import Link from 'next/link';
import Navbar from '@/app/components/navbar'

const featuredCities = [
  {
    name: "shkodra",
    title: "Shkodra",
    description: "Historic city with beautiful lake views and rich cultural heritage.",
    tags: ["Historic", "Natural", "Cultural"],
    image: "/assets/Shkoder.jpeg"
  },
  {
    name: "tirana",
    title: "Tirana",
    description: "Modern capital city with vibrant culture and exciting attractions.",
    tags: ["Modern", "Cultural", "Urban"],
    image: "/assets/Tirana.jpeg"
  }
];

const otherCities = [
  {
    name: "vlora",
    title: "Vlora",
    description: "Coastal gem with beautiful beaches and historical significance.",
    tags: ["Beach", "Historic", "Coastal"],
    image: "/assets/vlore.jpeg"
  }
];

export default function MapPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Discover Albania</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the rich history, stunning landscapes, and vibrant culture of Albania&apos;s most beautiful cities.
            </p>
          </div>

          {/* Featured Cities Section */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Featured Cities</h2>
              <p className="text-lg text-gray-400">Our top recommendations for your Albanian adventure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCities.map((city) => (
                <Link
                  key={city.name}
                  href={`/chat/${city.name}`}
                  className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-[1.02] w-[350px] mx-auto"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }}>
                      <div className="absolute inset-0 bg-black/40 animate-pulse-slow"></div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-6">
                    <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {city.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4">{city.description}</p>
                    <div className="flex space-x-3">
                      {city.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-blue-500/30 text-blue-500 rounded-full text-sm group-hover:bg-blue-500/40 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other Cities Section */}
          <div className="space-y-8 mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Other Cities</h2>
              <p className="text-lg text-gray-400">More destinations to explore in Albania</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherCities.map((city) => (
                <Link
                  key={city.name}
                  href={`/chat/${city.name}`}
                  className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-[1.02] w-[350px] mx-auto"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }}>
                      <div className="absolute inset-0 bg-black/40 animate-pulse-slow"></div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-6">
                    <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {city.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4">{city.description}</p>
                    <div className="flex space-x-3">
                      {city.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-blue-500/30 text-blue-500 rounded-full text-sm group-hover:bg-blue-500/40 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Add CSS for animations
const styles = `
@keyframes pulse-slow {
  0% { opacity: 0.4; }
  50% { opacity: 0.6; }
  100% { opacity: 0.4; }
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}