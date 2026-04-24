"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { fetchSocialMedia } from "@/redux/Slice/SocialMediaSlice";

export default function Whatsapp() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.socialmedia);

  useEffect(() => {
    dispatch(fetchSocialMedia());
  }, [dispatch]);

  // Get WhatsApp item from API
  const whatsapp = items?.find(
    (item) => item.type === "whatsapp" && item.status === 1
  );

  // Extract number from link: https://web.whatsapp.com/+9779867586576
  const phone =
    whatsapp?.link?.replace(/\D/g, "") || "9779867586576";

  const message = encodeURIComponent("Can I know more about the Product?");

  return (
    <div className="fixed bottom-10 right-6 z-50">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-400/50 hover:scale-125 transition-all duration-500 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-50 animate-ping"></span>

        {/* Glow effect */}
        <span className="absolute w-20 h-20 rounded-full bg-green-400 opacity-20 blur-2xl animate-pulse"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp size={32} color="white" className="relative z-10" />
      </a>
    </div>
  );
}
