"use client";

import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { FaDumbbell, FaWater, FaRunning, FaBox } from "react-icons/fa"; // Import icons
import Link from "next/link";
export default function Fitnessfine() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Top Red Banner */}
      <div className="bg-red-600 py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-lg md:text-2xl font-semibold">
          We Are Always Providing Best <br />
          Fitness Services For You
        </h2>
        <Link href ="/contact">
        <button className="cursor-pointer mt-4 md:mt-0 border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition">
          JOIN WITH US →
        </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <div className="border-4 border-white inline-block">
            <Image
              src="/images/fit.jpg"
              alt="Fitness Training"
              width={500}
              height={600}
              className="object-cover"
            />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
              <CiPlay1 size={32} color="black"/>
            </div>
          </div>

          {/* Red Line Accent */}
          <div className="absolute -right-6 top-10 w-1 h-40 bg-red-600"></div>
        </div>

        {/* Right Content */}
        <div>
          <span className="inline-block bg-red-600 text-xs px-4 py-1 rounded-full mb-4">
            WHY CHOOSE US
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            We Can Give A Shape Of Your <br /> Body Here!
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            At CoreFit, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Feature icon={<FaDumbbell />} title="Free Fitness Training" />
            <Feature icon={<FaRunning />} title="Modern Gym Equipments" />
            <Feature icon={<FaBox />} title="Gym Bag Equipments" />
            <Feature icon={<FaWater />} title="Fresh Bottle Of Water" />
          </div>

          <button className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition">
            OUR CLASSES →
          </button>
        </div>
      </div>
    </section>
  );
}

/* Feature Component */
function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-red-500 text-lg">
        {icon}
      </div>
      <span className="text-sm">{title}</span>
    </div>
  );
}
