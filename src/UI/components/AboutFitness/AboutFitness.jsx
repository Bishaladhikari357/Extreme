"use client";

import Image from "next/image";

export default function AboutFitness() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/fit.jpg" // place image inside public folder
        alt="About Fitness"
        fill
        priority
        className="object-cover object-right opacity-90"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About
          </h1>

          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full">
            <span className="text-red-500 font-semibold">
              MB Fitness
            </span>
            <span className="text-gray-300">- About</span>
          </div>
        </div>
      </div>

      {/* Decorative Icon (Left) */}
      <div className="absolute left-6 bottom-6 opacity-20">
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M6 6h12v12H6z" />
          <path d="M3 9h3M18 9h3M3 15h3M18 15h3" />
        </svg>
      </div>
    </section>
  );
}
