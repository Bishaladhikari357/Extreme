"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Homefit() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const title = "Homefit Fitness – Make Your Body Fit & Perfect";
  const description =
    "We provide gym equipment, supplements, accessories and complete gym setup services.";

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%0A${encodedUrl}`,
  };

  // ✅ Instagram Share (copy + open DM)
  const shareOnInstagram = async () => {
    const text = `${title}\n${pageUrl}`;
    try {
      await navigator.clipboard.writeText(text);
      window.open("https://www.instagram.com/direct/inbox/", "_blank");
      alert("Link copied! Paste it in Instagram DM 📋");
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/images/gym.jpg"
        alt="Homefit Fitness"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute right-0 top-0 h-full w-[45%] clip-homefit"></div>

      {/* ================= CONTENT ================= */}
      <div className=" relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-xl">
          <span className="inline-block bg-red-400 text-black px-5 py-2 font-semibold mb-6 brush">
            FIND YOUR ENERGY
          </span>

          <h1 className="text-4xl text-red-500 md:text-6xl font-extrabold">
            MAKE YOUR BODY
          </h1>
          <h2 className=" pb-7 text-3xl md:text-5xl font-light mt-2">
            FIT & PERFECT
          </h2>

          <p className="mt-6 text-2xl text-white/90">{description}</p>

          <Link
            href="/classes"
            className="inline-flex items-center gap-2 mt-10 bg-red-300 text-black px-8 py-4 font-semibold hover:bg-red-600 hover:text-white transition"
          >
            OUR CLASSES →
          </Link>
        </div>
      </div>

      {/* ================= SHARE ICONS ================= */}
     <div className="pl-7 absolute lg:right-6 pb-10 top-1/2 -translate-y-1/2 flex flex-row lg:flex-col gap-4 z-10 items-center">
  <span className="lg:rotate-90 text-sm tracking-widest">SHARE</span>

  <a href={shareLinks.facebook} target="_blank" className="hover:text-red-600">
    <FaFacebookF size={20} />
  </a>

  <a href={shareLinks.twitter} target="_blank" className="hover:text-red-600">
    <FaTwitter size={20} />
  </a>

  <a href={shareLinks.linkedin} target="_blank" className="hover:text-red-600">
    <FaLinkedinIn size={20} />
  </a>

  <a href={shareLinks.whatsapp} target="_blank" className="hover:text-red-600">
    <FaWhatsapp size={20} />
  </a>

  <button
    onClick={shareOnInstagram}
    className="hover:text-red-600 transition"
    aria-label="Share on Instagram"
  >
    <FaInstagram size={20} />
  </button>
</div>

      <style jsx>{`
        .clip-homefit {
          clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
