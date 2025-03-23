"use client";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Link from 'next/link';

const images = [
  '/assets/berat.jpeg',
  '/assets/Blue_eye.jpeg',
  '/assets/gjirokaster.jpeg',
  '/assets/Llogara_pass.jpeg',
  '/assets/petrela_castle.jpeg',
  '/assets/Porto_palermo.jpeg',
  '/assets/vlore.jpeg',
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex]; // Update currentImage with the next index
        });
        setFade(false); // Start fading in
      }, 500); // Match this with the CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero relative bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-cover bg-center h-screen transition-opacity duration-500" style={{ backgroundImage: `url(${currentImage})`, opacity: fade ? 0 : 1 }} />
        <div className="flex h-full">
        <div className='flex items-center justify-center w-full h-full bg-black/60 z-10'>
          <div className="text-center text-white z-20">
            <h2 className="text-4xl font-bold mb-4">Explore the World with Us</h2>
            <p className="mb-8">Your adventure starts here. Discover beautiful places and unique experiences.</p>
            <Link href="/login">
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}