"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { fetchProducts } from "../../redux/Slice/ProductSlice";

// Skeleton card for products
const ProductSkeleton = () => (
  <div className="rounded-xl shadow bg-white overflow-hidden w-[260px] animate-pulse">
    <div className="w-full bg-gray-300" style={{ aspectRatio: "4/3" }}></div>
    <div className="p-4 flex flex-col items-center text-center">
      <div className="h-5 bg-gray-300 w-3/4 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
    </div>
  </div>
);

const Product = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [isClient, setIsClient] = useState(false);

  // Ensure component renders client-only dynamic content safely
  useEffect(() => {
    setIsClient(true);
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mt-15 mx-auto px-6">
          <h1 className="text-4xl mb-3 font-bold text-red-500 text-center">
            <span className="inline-block pb-1">
              <span className="text-black">Our</span>
              <span className="border-b-3 border-red-700"> Produc</span>
              <span>ts</span>
            </span>
          </h1>
          <p className="text-lg mb-10 text-gray-600 max-w-xl mx-auto leading-relaxed text-center">
            An online store where you can easily find and buy all your{" "}
            <span className="text-red-500 font-bold">
              daily essentials, health products, and more.
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              : items.map((product) => (
                  <div
                    key={product.product_id}
                    className="rounded-xl shadow bg-white overflow-hidden w-[260px] hover:shadow-lg transition product-motion1"
                  >
                    <Link href={`/products/${product.slug}`} className="block">
                      <img
                        src={product.image}
                        alt={product.product_name}
                        className="w-full object-cover"
                        style={{ aspectRatio: "4/3" }}
                      />
                      <div className="p-4 flex flex-col items-center text-center">
                        <h2 className="font-bold text-lg text-gray-800 mt-2">
                          {product.product_name}
                        </h2>
                        {/* <p className="text-gray-600 mt-1">
                          Price: Rs. {product.price}
                        </p> */}
                      </div>
                    </Link>
                  </div>
                ))}
          </div>

          {error && (
            <p className="text-center py-10 text-red-500">{error}</p>
          )}
        </div>
        <button className="mt-10 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition block mx-auto">
          <Link href="/gallery">View All Products</Link>
        </button>
      </div>
    </>
  );
};

export default Product;


