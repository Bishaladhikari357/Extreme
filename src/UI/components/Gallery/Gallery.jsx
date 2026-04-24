"use client";

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedia } from "../../../redux/Slice/MediaSlice";
import Link from "next/link";

export default function Gallery() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.media);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState([]);

  /* Fetch media */
  useEffect(() => {
    dispatch(fetchAllMedia());
  }, [dispatch]);

  /* Filter gallery media (media_type_id === 6) */
  useEffect(() => {
    if (items?.length > 0) {
      const filtered = items
        .filter((item) => item.media_type_id === 6)
        .flatMap((item) => (Array.isArray(item.data) ? item.data : []));
      setGalleryItems(filtered);
    }
  }, [items]);

  /* Navigation */
  const next = useCallback(() => {
    if (!galleryItems.length) return;
    setIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const prev = useCallback(() => {
    if (!galleryItems.length) return;
    setIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  /* Keyboard support */
  useEffect(() => {
    const handleKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, next, prev]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Gallery
          </h2>
          <p className="max-w-screen-sm text-gray-500">
            A collection of gallery images displayed together for quick viewing.
          </p>
        </div>

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-gray-500">Loading gallery...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}
        {!loading && !error && galleryItems.length === 0 && (
          <p className="text-center text-gray-500">No gallery images found.</p>
        )}

        {/* Gallery Grid (ONLY 6 IMAGES) */}
        {!loading && !error && galleryItems.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {galleryItems.slice(0, 9).map((item, i) => (
              <div
                key={item.id || i}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={item.image}
                  alt={item.name || "gallery image"}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="relative ml-4 mb-3 text-sm text-white md:text-lg">
                  {item.name || "Image"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Preview */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white text-4xl"
            >
              ‹
            </button>

            <img
              src={galleryItems[index]?.image}
              alt="preview"
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white text-4xl"
            >
              ›
            </button>
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            View More
          </Link>
        </div>

      </div>
    </div>
  );
}
