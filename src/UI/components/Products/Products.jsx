"use client";

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { fetchProducts } from "../../../redux/Slice/ProductSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  /* Fetch products */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  /* Navigation */
  const next = useCallback(() => {
    if (!items?.length) return;
    setIndex((prev) => (prev + 1) % items.length);
  }, [items]);

  const prev = useCallback(() => {
    if (!items?.length) return;
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items]);

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
            Products
          </h2>
          <p className="max-w-screen-sm text-gray-500">
            Explore our featured products carefully selected for you.
          </p>
        </div>

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}
        {!loading && !error && items.length === 0 && (
          <p className="text-center text-gray-500">No products found.</p>
        )}

        {/* Product Grid (ONLY 8 ITEMS) */}
        {!loading && !error && items.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 xl:gap-8">
            {items.slice(0, 8).map((product, i) => (
              <div
                key={product.product_id}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="relative ml-4 mb-3 text-sm text-white md:text-lg">
                  {product.product_name}
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

            <div className="max-w-xl w-full text-center">
              <img
                src={items[index]?.image}
                alt={items[index]?.product_name}
                className="max-h-[80vh] mx-auto rounded-lg object-contain"
              />
              <h3 className="text-white text-xl mt-4 font-semibold">
                {items[index]?.product_name}
              </h3>
              <Link
                href={`/products/${items[index]?.slug}`}
                className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                View Product
              </Link>
            </div>

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

        {/* View More */}
        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            View More
          </Link>
        </div>

      </div>
    </div>
  );
}
