"use client";
import Navbar from './components/navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Explore the World with Us</h2>
            <p className="mb-8">Your adventure starts here. Discover beautiful places and unique experiences.</p>
            <Link href="/destinations">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}