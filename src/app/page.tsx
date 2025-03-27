"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);
  const images = [
    "/assets/berat.jpeg",
    "/assets/Blue_eye.jpeg",
    "/assets/gjirokaster.jpeg",
    "/assets/Llogara_pass.jpeg",
    "/assets/petrela_castle.jpeg",
    "/assets/Porto_palermo.jpeg",
    "/assets/vlore.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src || '';
          observer.unobserve(image);
        }
      });
    });

    const imageElements = document.querySelectorAll('img[data-src]');
    imageElements.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero relative bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-cover bg-center h-screen transition-opacity duration-500" style={{ backgroundImage: `url(${images[currentImage]})`, opacity: fade ? 0 : 1 }} />
        <div className="flex h-full">
          <div className="flex items-center justify-center w-full h-full bg-black/60 z-10">
            <div className="text-center text-white z-20">
              <h2 className="text-4xl font-bold mb-4">Explore Albania</h2>
              <p className="mb-8">Your adventure starts here. Discover beautiful places and unique experiences.</p>
              <Link href="/map">
                <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Start Your Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Why Use Our Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Information</h3>
              <p className="text-gray-400">Access comprehensive details about Albanian cities, attractions, and experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Chat</h3>
              <p className="text-gray-400">Get personalized recommendations and answers through our AI chat assistant.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Maps</h3>
              <p className="text-gray-400">Explore Albania with our interactive map featuring all major cities and attractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-white mb-2">Shkodra</h3>
              <p className="text-gray-400">Historic city with beautiful lake views and rich cultural heritage.</p>
              <Link href="/chat/shkodra" className="inline-block mt-4 text-blue-500 hover:text-blue-400">
                Explore Shkodra →
              </Link>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-white mb-2">Tirana</h3>
              <p className="text-gray-400">Modern capital city with vibrant culture and exciting attractions.</p>
              <Link href="/chat/tirana" className="inline-block mt-4 text-blue-500 hover:text-blue-400">
                Explore Tirana →
              </Link>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-white mb-2">Vlora</h3>
              <p className="text-gray-400">Coastal gem with beautiful beaches and historical significance.</p>
              <Link href="/chat/vlora" className="inline-block mt-4 text-blue-500 hover:text-blue-400">
                Explore Vlora →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;