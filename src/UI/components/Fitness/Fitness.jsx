"use client";

import Image from "next/image";
import { FaDumbbell, FaRunning, FaCog } from "react-icons/fa"; // Import icons

export default function Fitness() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      
      {/* ================= BACKGROUND PATTERN ================= */}
      <div className="absolute inset-0 bg-[url('/images/fit.jpg')] bg-cover opacity-40"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Brush Label */}
          <span className="brush-red inline-block text-white px-6 py-2 font-semibold mb-6">
            WHO WE ARE
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Take Your Health And Body To <br /> Next Level
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>

          {/* FEATURES */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            
            <div>
              <div className="icon-box text-red-500 text-4xl flex justify-center">
                <FaDumbbell />
              </div>
              <h4 className="mt-4 font-semibold text-black">
                PROFESSIONAL<br />TRAINERS
              </h4>
            </div>

            <div>
              <div className="icon-box text-red-500 text-4xl flex justify-center">
                <FaCog />
              </div>
              <h4 className="mt-4 font-semibold text-black">
                MODERN<br />EQUIPMENTS
              </h4>
            </div>

            <div>
              <div className="icon-box text-red-500 text-4xl flex justify-center">
                <FaRunning />
              </div>
              <h4 className="mt-4 font-semibold text-black">
                FANCY GYM<br />MACHINES
              </h4>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Red Gradient Shape */}
          <div className="absolute right-0 w-[80%] h-full rounded-l-full bg-gradient-to-t  animate-pulse opacity-90"></div>

          {/* Shadow Layer for Depth */}
          <div className="absolute right-5 w-[400px] h-[650px] rounded-l-full bg-black/20 blur-xl"></div>

          {/* Athlete Image */}
          <Image
            src="/images/home.jpg"
            alt="Fitness Runner"
            width={420}
            height={700}
            className="relative z-20 object-contain rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}
