"use client";

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedia } from "../../redux/Slice/MediaSlice";

/* =======================
   Skeleton Loader
======================= */
function GallerySkeleton() {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative h-48 md:h-80 rounded-lg overflow-hidden bg-gray-200 animate-pulse"
        >
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute bottom-3 left-3 w-24 h-4 bg-gray-400 rounded" />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.media);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState([]);

  /* =======================
     Fetch Media
  ======================= */
  useEffect(() => {
    dispatch(fetchAllMedia());
  }, [dispatch]);

  /* =======================
     Extract Gallery Images
  ======================= */
  useEffect(() => {
    if (!items || items.length === 0) {
      setGalleryItems([]);
      return;
    }

    const gallery = items.find(
      (item) => item.media_type_id === 6
    );

    if (!gallery || !Array.isArray(gallery.data)) {
      setGalleryItems([]);
      return;
    }

    const normalized = gallery.data.map((item) => ({
      id: item.media_id,
      title: item.title,
      image: item.image || "",
    }));

    setGalleryItems(normalized);
  }, [items]);

  /* =======================
     Navigation
  ======================= */
  const next = useCallback(() => {
    if (!galleryItems.length) return;
    setIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const prev = useCallback(() => {
    if (!galleryItems.length) return;
    setIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, [galleryItems.length]);

  /* =======================
     Keyboard + Body Scroll Lock
  ======================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [open, next, prev]);

  return (
    <div className="bg-white mt-10 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-500 mt-2">
            A collection of images displayed together.
          </p>
        </div>

        {/* States */}
        {loading && <GallerySkeleton />}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

     

        {/* Grid */}
        {!loading && !error && galleryItems.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="relative h-48 md:h-80 cursor-pointer overflow-hidden rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {open && galleryItems[index] && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 text-white text-4xl select-none"
            >
              ‹
            </button>

            {/* Image (NO 20px margin FIX) */}
            <img
              src={galleryItems[index].image}
              alt={galleryItems[index].title}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg mx-auto"
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 text-white text-4xl select-none"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
