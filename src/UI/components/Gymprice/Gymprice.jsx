import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Link from "next/link";

const plans = [
  {
    title: "Beginner",
    price: "5,000",
    image: "/images/beginner.jpg",
    tag: "Starter",
  },
  {
    title: "Basic",
    price: "6,000",
    image: "/images/basis.jpg",
    tag: "Most Popular",
    active: true,
  },
  {
    title: "Advance",
    price: "10,000",
    image: "/images/fit.jpg",
    tag: "Pro Level",
  },
];

export default function Gymprice() {
  return (
    <>
    <section className="bg-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold ">
            Gym <span className="text-red-600">Membership</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Choose the right plan and start your fitness transformation
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
        </div>
      </div>
    </section>
            </>
  );
}

function PricingCard({ plan }) {
  return (
    <div
      className={`relative bg-[#d5cccc] border border-white/10 rounded-xl overflow-hidden
      transition hover:-translate-y-2 hover:shadow-xl
      ${plan.active ? "border-red-600 scale-105" : ""}`}
    >
      {/* Tag */}
      <div className="absolute top-4 left-4 bg-red-600  text-xs px-3 py-1 rounded">
        {plan.tag}
      </div>

      {/* Image */}
      <div className="relative h-56">
        <Image
          src={plan.image}
          alt={plan.title}
          fill
          className="object-cover"
        />
        <div className="absolute bg-black/50" />
      </div>

      {/* Content */}
      <div className="p-8 text-center ">
        <h3 className="group text-2xl font-extrabold  mb-2 relative inline-block transition-all duration-300">
  {plan.title}
  <span className="block w-8 h-1 bg-red-600 mt-2 mx-auto
    transition-all duration-300
    group-hover:w-14 group-hover:bg-red-500">
  </span>
</h3>


        <div className="text-4xl font-extrabold mb-1">
          Rs. {plan.price}
        </div>
        <p className="text-gray-600 text-sm mb-6">per month</p>

        <ul className="text-gray-600 text-sm space-y-3 mb-8 text-left max-w-xs mx-auto">
          <li>✔ Full Gym Access</li>
          <li>✔ Cardio & Strength</li>
          <li>✔ Weight Training</li>
          <li>✔ Trainer Support</li>
          <li>✔ Locker Facility</li>
        </ul>

        <Link href="/contact">
  <button
    className={`w-full py-3 cursor-pointer text-white text-sm font-bold transition
    ${
      plan.active
        ? "bg-red-600 hover:bg-red-700"
        : "bg-gray-600 hover:bg-red-600"
    }`}
  >
    JOIN NOW →
  </button>
</Link>
      </div>
    </div>
  );
}
