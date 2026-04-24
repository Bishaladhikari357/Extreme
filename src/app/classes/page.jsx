"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  StretchHorizontal,
  Timer,
  User,
  Sparkles,
  Star,
  Trophy,
  Users,
  FlameKindling,
} from "lucide-react";

// Stats / Social Proof
const stats = [
  { icon: Users, label: "Active Members", value: "12,000+" },
  { icon: Trophy, label: "Transformations", value: "4,500+" },
  { icon: FlameKindling, label: "Calories Burned", value: "9M+" },
];

// Gym Classes / Programs
const classes = [
  {
    title: "Elite Strength",
    description: "Build muscle, power, and discipline with elite-level strength programs.",
    icon: Dumbbell,
    image: "/images/fit.jpg",
    level: "Beginner – Advanced",
    duration: "60 Min",
    trainer: "Pro Strength Coach",
    rating: "4.9",
    tag: "Top Rated",
  },
  {
    title: "Cardio Burn X",
    description: "Explosive cardio sessions designed to shred fat and boost endurance.",
    icon: Flame,
    image: "/images/fit.jpg",
    level: "All Levels",
    duration: "45 Min",
    trainer: "Cardio Specialist",
    rating: "4.8",
    tag: "Fat Loss",
  },
  {
    title: "Yoga Flow",
    description: "Recover, stretch, and restore balance with guided mobility flows.",
    icon: StretchHorizontal,
    image: "/images/fit.jpg",
    level: "Beginner",
    duration: "50 Min",
    trainer: "Yoga Expert",
    rating: "4.7",
    tag: "Recovery",
  },
  {
    title: "HIIT Extreme",
    description: "Maximum calorie burn through intense, fast-paced workouts.",
    icon: HeartPulse,
    image: "/images/fit.jpg",
    level: "Intermediate",
    duration: "30 Min",
    trainer: "HIIT Pro",
    rating: "5.0",
    tag: "Hardcore",
  },
];

// Trainers Section
const trainers = [
  { name: "John Doe", specialty: "Strength Coach", experience: "10+ years", image: "/images/fit.jpg" },
  { name: "Jane Smith", specialty: "Yoga Expert", experience: "8 years", image: "/images/fit.jpg" },
  { name: "Mike Johnson", specialty: "Cardio Specialist", experience: "6 years", image: "/images/fit.jpg" },
];

export default function GymPage() {
  return (
    <>
    <section className="bg-gray-400 text-white overflow-hidden">
      {/* HERO */}
    <div className="relative h-[450px] sm:h-[550px] md:h-[650px] flex items-center justify-center">
  {/* Background Image */}
  <Image
    src="/images/fit.jpg"
    alt="Gym Hero"
    fill
    priority
    className="object-cover scale-105"
  />

  {/* Overlay (covers entire image) */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black/80 to-green-900/40" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="relative z-10 text-center max-w-5xl px-6"
  >
    <div className="inline-flex items-center gap-2 px-5 py-3 mb-6 rounded-full bg-red-500/20 text-red-400 text-sm tracking-wide">
      <Sparkles size={16} /> WORLD-CLASS FITNESS
    </div>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
      Transform Your <span className="text-red-500">Body & Mind</span>
    </h1>

    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
      Science-backed programs, elite coaches, proven results.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
      <button className="bg-red-500 hover:bg-red-600 text-black font-extrabold px-10 sm:px-12 py-3 sm:py-5 rounded-xl text-lg transition">
        Start Now
      </button>
      <button className="border border-white/30 text-black bg-red-500 hover:border-red-500 px-10 sm:px-12 py-3 sm:py-5 rounded-xl text-lg transition">
        View Programs
      </button>
    </div>
  </motion.div>
</div>



      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
          const suffix = stat.value.replace(/[0-9,]/g, ""); // + or M+
          return (
              <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 text-center shadow-xl"
            >
              <Icon className="mx-auto mb-4 text-green-500" size={36} />
              <h3 className="text-3xl font-extrabold mb-2">
                <CountUp start={0} end={numericValue} duration={2} separator="," suffix={suffix} />
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CLASSES */}
      {/* <div className="max-w-7xl mx-auto px-6 pb-32">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center mb-20">
          <span className="text-black">Signature</span> <span className="text-red-500">Training Programs</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {classes.map((item, index) => {
            const Icon = item.icon;
            return (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-green-500 transition-all shadow-2xl">
                <div className="relative h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <span className="absolute top-5 left-5 bg-green-500 text-black text-xs font-bold px-4 py-1 rounded-full">{item.tag}</span>
                </div>

                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Icon className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star size={16} fill="currentColor" /> {item.rating}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">{item.description}</p>

                  <div className="flex justify-between text-sm text-gray-300">
                    <span className="flex items-center gap-2">
                      <Timer size={16} /> {item.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} /> {item.trainer}
                    </span>
                  </div>

                  <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black font-extrabold py-4 rounded-xl transition">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div> */}

      {/* TRAINERS */}
      <div className="max-w-7xl mx-auto px-6 pb-10 text-red-500">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center mb-20">
          Meet Our Expert Trainers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-green-500 shadow-lg">
              <div className="relative h-72 w-full">
                <Image src={trainer.image} alt={trainer.name} fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-green-500">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm">{trainer.experience} experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
          </>
  );
}
