"use client"; // required for hooks and Redux in Next.js app directory

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyProfile } from "../../../redux/Slice/CompanyProfileSlice"; // adjust path
import Image from "next/image";
import Link from "next/link";

export default function Fitnesstrainer() {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.companyProfile);

  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/ropes1.jpg"
        alt="Fitness Trainer"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-20">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Need a Fitness Trainer?
          </h1>

          {/* Dynamic Contact */}
          {loading ? (
            <p className="text-red-500 text-lg md:text-xl mb-6">Loading contact...</p>
          ) : error ? (
            <p className="text-red-500 text-lg md:text-xl mb-6">{error}</p>
          ) : (
            <p className="text-red-500 text-lg md:text-xl mb-6">
              Call: {profile?.mobile_no || "+92 31523697586"}
            </p>
          )}

          {/* Call to Action */}
          <Link
            href="#pricing"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 transition flex items-center gap-2"
          >
            PURCHASE NOW <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
