"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    // Add any animations or effects here if needed
    const title = document.querySelector('.title');
    if (title) {
      title.classList.add('fade-in');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Image
        src="/ksbl-acm-logo.png" // Replace with your logo path
        alt="KSBL ACM Student Chapter Logo"
        width={200}
        height={200}
        className="logo animate-bounce"
      />
      <h1 className="title text-4xl font-bold mt-4 opacity-0 transition-opacity duration-1000">We are coming soon!</h1>
      <div className="animation-container mt-8">
        {/* Add any graphics or animations here */}
        <div className="w-24 h-24 bg-white/20 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}