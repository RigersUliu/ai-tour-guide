"use client";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { AuroraText } from "@/components/magicui/aurora-text";

const featuredCities = [
  {
    name: "shkodra",
    title: "Shkodra",
    description:
      "Historic city with beautiful lake views and rich cultural heritage.",
    tags: ["Historic", "Natural", "Cultural"],
    image: "/assets/Shkoder.jpeg",
  },
  {
    name: "tirana",
    title: "Tirana",
    description:
      "Modern capital city with vibrant culture and exciting attractions.",
    tags: ["Modern", "Cultural", "Urban"],
    image: "/assets/Tirana.jpeg",
  },
];

const otherCities = [
  {
    name: "vlora",
    title: "Vlora",
    description:
      "Coastal gem with beautiful beaches and historical significance.",
    tags: ["Beach", "Historic", "Coastal"],
    image: "/assets/vlore.jpeg",
  },
];

export default function MapPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-black">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
                Discover <AuroraText>Albania</AuroraText>
              </h1>
              <p className="tracking-tight text-xs sm:text-sm md:text-sm max-w-2xl mx-auto text-gray-600">
                Explore the rich history, stunning landscapes, and vibrant
                culture of Albania&apos;s most beautiful cities.
              </p>
            </div>

            {/* Featured Cities Section */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2 text-primary">
                  Featured Cities
                </h2>
                <p className="text-lg text-gray-600">
                  Our top recommendations for your Albanian adventure
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {featuredCities.map((city) => (
                  <Link
                    key={city.name}
                    href={`/chat/${city.name}`}
                    className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-[1.02] w-[350px] mx-auto"
                  >
                    <div className="relative h-[250px] overflow-hidden rounded-t-2xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url(${city.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/40 animate-pulse-slow rounded-t-2xl"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl"></div>
                    </div>
                    <div className="relative p-8 bg-white border-2 border-gray-200 hover:border-primary/20 hover:bg-gray-50 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-b-2xl">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-2xl font-extrabold text-primary">
                          {city.title}
                        </h3>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="ml-1 text-primary font-semibold">
                            {city.tags.length}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {city.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1.5 text-sm bg-gray-100 text-primary rounded-full hover:bg-gray-200 transition-colors duration-200"
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
                <h2 className="text-4xl font-bold mb-2 text-primary">
                  Other Cities
                </h2>
                <p className="text-lg text-gray-600">
                  More destinations to explore in Albania
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {otherCities.map((city) => (
                  <Link
                    key={city.name}
                    href={`/chat/${city.name}`}
                    className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-[1.02] w-[350px] mx-auto"
                  >
                    <div className="relative h-[250px] overflow-hidden rounded-t-2xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url(${city.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/40 animate-pulse-slow rounded-t-2xl"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl"></div>
                    </div>
                    <div className="relative p-8 bg-white border-2 border-gray-200 hover:border-primary/20 hover:bg-gray-50 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-b-2xl">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-2xl font-extrabold text-primary">
                          {city.title}
                        </h3>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="ml-1 text-primary font-semibold">
                            {city.tags.length}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {city.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1.5 text-sm bg-gray-100 text-primary rounded-full hover:bg-gray-200 transition-colors duration-200"
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
      <Footer />
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
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = styles;
  document.head.appendChild(style);
}
