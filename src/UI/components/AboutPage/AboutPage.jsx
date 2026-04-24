"use client";

import Image from "next/image";
import { Dumbbell, Target, Eye, Trophy, Users, Flame } from "lucide-react";

export default function AboutPage() {
  return (
    <>

      <section className="bg-gray-300 text-white">
        {/* HERO SECTION */}
        {/* <div className="relative h-[420px] flex items-center justify-center">
          <Image
            src="/images/fit.jpg"
            alt="Gym About"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500">
              About Our Gym
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Build strength, confidence, and a healthier lifestyle with us
            </p>
          </div>
        </div> */}

        {/* ABOUT US */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our gym is more than just a place to work out. We are a community
              focused on helping people achieve their fitness goals through
              expert training, modern equipment, and a motivating environment.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you are a beginner or a professional athlete, we provide
              the support and guidance you need to transform your body and mind.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about2.jpg"
              alt="Gym Training"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="bg-zinc-900 py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-black shadow-lg">
              <Target className="text-red-500 mb-4" size={36} />
              <h3 className="text-2xl font-semibold mb-4">Our Target</h3>
              <p className="text-gray-300">
                To inspire and empower people to live healthier lives by
                providing world-class fitness training, personalized programs,
                and a supportive community.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-black shadow-lg">
              <Eye className="text-red-500 mb-4" size={36} />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become a leading fitness destination where people of all
                ages achieve physical excellence and mental strength.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-red-500 text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Dumbbell className="mx-auto text-red-500 mb-4" size={40} />
              <h4 className="text-xl text-black font-semibold mb-2">
                Modern Equipment
              </h4>
              <p className="text-gray-900">
                Train with top-quality machines and free weights.
              </p>
            </div>

            <div className="text-center">
              <Users className="mx-auto text-red-500 mb-4" size={40} />
              <h4 className="text-xl text-black font-semibold mb-2">
                Expert Trainers
              </h4>
              <p className="text-gray-900">
                Certified professionals to guide every workout.
              </p>
            </div>

            <div className="text-center">
              <Flame className="mx-auto text-red-500 mb-4" size={40} />
              <h4 className="text-xl text-black font-semibold mb-2">
                Motivating Atmosphere
              </h4>
              <p className="text-gray-900">
                A high-energy environment that keeps you pushing forward.
              </p>
            </div>
          </div>
        </div>

        
      </section>

    </>
  );
}
