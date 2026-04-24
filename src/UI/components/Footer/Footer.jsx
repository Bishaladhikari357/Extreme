"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedia } from "../../../redux/Slice/MediaSlice";
import { fetchCompanyProfile } from "../../../redux/Slice/CompanyProfileSlice";
import { fetchSocialMedia } from "../../../redux/Slice/SocialMediaSlice";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaRegCopyright 
} from "react-icons/fa";
import { FiLinkedin, FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const Footer = () => {
  const dispatch = useDispatch();

  // Redux states
  const { items: mediaItems, loading: mediaLoading } = useSelector((state) => state.media);
  const { profile, loading: profileLoading } = useSelector((state) => state.companyProfile);
  const { items: socialItems, loading: socialLoading } = useSelector((state) => state.socialmedia);

  useEffect(() => {
    dispatch(fetchAllMedia());
    dispatch(fetchCompanyProfile());
    dispatch(fetchSocialMedia());
  }, [dispatch]);

  const logo = mediaItems.find((item) => item.name?.toLowerCase() === "logo");

  // Map API social media types to react-icons
  const getSocialIcon = (type) => {
    switch (type) {
      case "whatsapp":
        return <FaWhatsapp size={18} />;
      case "facebook":
        return <FaFacebookF size={18} />;
      case "instagram":
        return <FaInstagram size={18} />;
      case "linkedin":
        return <FiLinkedin size={18} />;
      case "twitter":
        return <FaTwitter size={18} />;
      case "youtube":
        return <FaYoutube size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#fff] text-black pt-5 pb-7 px-6 sm:px-10 lg:px-0 border-t border-white/10">
      <h1 className=" text-3xl md:text-4xl font-extrabold  text-red-600 text-center mb-12">
  Our Outlets
</h1>

<div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold text-gray-800">
            Extreme Fitness Club
          </h2>

          <div className="h-1 w-14 bg-red-500 my-4 rounded-full"></div>

          <p className="text-gray-600 leading-relaxed">
            We provide gym equipment, supplements, accessories, and complete gym setup services to help you build a professional fitness space.
          </p>

          <a
            href="https://www.google.com/maps/place/Extreme+fitness+club%60%60/@27.6765813,83.3924405,13z/data=!4m10!1m2!2m1!1sextreme++fitness+kalikanagar!3m6!1s0x39968500441f237b:0x6e34b4b45b02ec7!8m2!3d27.6765813!4d83.4645383!15sChxleHRyZW1lICBmaXRuZXNzIGthbGlrYW5hZ2FykgEOZml0bmVzc19jZW50ZXLgAQA!16s%2Fg%2F11x1v3vg8j?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 text-sm font-semibold text-white bg-red-500 px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-red-600"
          >
            <FaMapMarkerAlt />
            View on Map
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold text-gray-800">
            MB Fitness Gym
          </h2>

          <div className="h-1 w-14 bg-red-500 my-4 rounded-full"></div>

          <p className="text-gray-600 leading-relaxed">
            A modern fitness gym focused on strength, endurance, and lifestyle transformation with premium training facilities.
          </p>

          <a
            href="https://www.google.com/maps/dir/27.7128341,83.4639854/MB+Fitness+Pvt+.+Ltd/@27.6939157,83.4451124,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x399685db3abb53dd:0xff1c77b60ba32eab!2m2!1d83.4652492!2d27.6749992!3e0?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 text-sm font-semibold text-white bg-red-500 px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-red-600"
          >
            <FaMapMarkerAlt />
            View on Map
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold text-gray-800">
            Extreme Fitness Gym (Tillottama)
          </h2>

          <div className="h-1 w-14 bg-red-500 my-4 rounded-full"></div>

          <p className="text-gray-600 leading-relaxed">
            A modern fitness gym focused on strength, endurance, and lifestyle transformation with premium training facilities.
          </p>

          <a
            href="https://www.google.com/maps/place/Extreme+Gym/@27.6480882,83.4666199,17z/data=!3m1!4b1!4m6!3m5!1s0x3996853d957f7f7b:0x28350aaf0de5b63f!8m2!3d27.6480882!4d83.4691948!16s%2Fg%2F11ffv32ch6?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 text-sm font-semibold text-white bg-red-500 px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-red-600"
          >
            <FaMapMarkerAlt />
            View on Map
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </div>
        <hr className="mt-7" />

      
      <div className="mt-5 max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Logo & About */}
          <div className="md:col-span-5 lg:col-span-6 space-y-6">
            <Link href="/" className="flex items-center">
              {mediaLoading ? (
                <span className="text-gray-400 text-sm">Loading...</span>
              ) : (
               <img
  src={logo?.data?.image || "/images/default.png"}
  alt="Logo"
  width={240}
  height={90}
  className="h-20 w-auto object-contain"
/>

              )}
            </Link>
           <p className="text-justify text-base leading-relaxed text-gray-400">
  <span className="text-black">MB Fitness is your ultimate destination for building strength, endurance, and overall health.</span>  
  <span className="text-red-500 font-medium"> High-intensity workouts, personal training programs, group classes,Diet Planning  and nutrition guidance </span><span className="text-black"> are designed to help you achieve your fitness goals faster.  
  Our focus is on</span> <span className="font-semibold text-red-500">safe, effective, and science-backed methods</span> <span className="text-black">to maximize performance and promote a healthier lifestyle.</span>
</p>


          </div>

          {/* Links & Contact */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase text-black tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><Link href="/" className=" transition">Home</Link></li>
                <li><Link href="/about" className=" transition">About Us</Link></li>
                <li><Link href="/products" className=" transition">Products</Link></li>
                <li><Link href="/contact" className="transition">Contact</Link></li>
              </ul>
            </div>

            {/* Policies / Get in Touch */}
            <div>
              <h3 className="text-sm font-semibold uppercase text-black tracking-wider mb-4">
                Policies
              </h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className=" transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className=" transition">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold uppercase text-black tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-black">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  {profileLoading ? "Loading..." : profile?.address || "Butwal, Nepal"}
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone size={16} />
                  <a href={`tel:${profile?.mobile_no || "+977-9800000000"}`}>
                    {profileLoading ? "Loading..." : profile?.mobile_no || "+977-9800000000"}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail size={20} />
                  <a href={`mailto:${profile?.email || "info@nctsoft.com"}`}>
                    {profileLoading ? "Loading..." : profile?.email || "info@nctsoft.com"}
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-5">
                {socialLoading ? (
                  <span>Loading...</span>
                ) : (
                  socialItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      {getSocialIcon(item.type)}
                    </a>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>

      

        <hr className="mt-7" />

        {/* Bottom Bar */}
        <p className="text-sm mt-7 flex items-center justify-center gap-1">
          <FaRegCopyright className="text-gray-600" />
          {new Date().getFullYear()}, All Rights Reserved by{" "}
          <span className="font-semibold">
            <a
              href="https://www.nctsoft.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NCT Soft Pvt Ltd
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
