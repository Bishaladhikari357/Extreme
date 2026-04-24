"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedia } from "../../../redux/Slice/MediaSlice";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ================= LOGO FROM API ================= */
  const { items: mediaItems = [], loading } = useSelector(
    (state) => state.media || {}
  );

  useEffect(() => {
    dispatch(fetchAllMedia());
  }, [dispatch]);

  const logoItem = mediaItems.find((i) => i?.name === "Logo");
  const logoImage = logoItem?.data?.image || "/logo.png";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {name:"Gallery", href:"/gallery"},
    {name : "Products", href:"/products"},
    // { name: "Packages", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            {!loading && (
              <Image
                src={logoImage}
                alt="Extreme Gym"
                width={130}
                height={45}
                unoptimized
                className="object-contain "
              />
            )}
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition hover:text-red-500 ${
                  pathname === item.href ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 border border-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            <span className="bg-red-600 w-6 h-6 flex items-center justify-center text-lg font-bold">
              +
            </span>
            Get mebership
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white text-sm hover:text-red-500"
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border border-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            <span className="bg-red-600 w-6 h-6 flex items-center justify-center text-lg font-bold">
              +
            </span>
            Get mebership
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
