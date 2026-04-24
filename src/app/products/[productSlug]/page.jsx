"use client";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { fetchProductBySlug } from "../../../redux/Slice/ProductDetailSlice";
import { FaHome, FaChevronRight } from "react-icons/fa";

const ProductSkeleton = () => (
  <div className=" mt-10 animate-pulse flex flex-col gap-6 px-4 sm:px-8 md:px-16">
    <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto"></div>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 h-[350px] bg-gray-300 rounded-2xl"></div>
      <div className="md:w-1/2 h-[300px] bg-gray-300 rounded-2xl"></div>
    </div>
  </div>
);

const ProductsDetails = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const slug = pathname.split("/").pop();
  const { item, loading, error } = useSelector(
    (state) => state.productDetail
  );

  const imgWrapperRef = useRef(null);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const ZOOM_SIZE = 180;
  const ZOOM_SCALE = 4.2;

  useEffect(() => {
    if (slug) dispatch(fetchProductBySlug(slug));
  }, [slug, dispatch]);

  if (loading) return <ProductSkeleton />;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!item) return <p className="text-center">Product not found</p>;

  const handleMouseMove = (e) => {
    const rect = imgWrapperRef.current.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen mt-20">
      {/* Breadcrumb */}
      <nav className="bg-gray-200 px-4 sm:px-8 py-4 flex items-center gap-2 text-lg">
        <a href="/" className="flex items-center text-red-500">
          <FaHome className="mr-1" /> Home
        </a>
        <FaChevronRight color="brown"/>
        <span className="text-red-500">{item.product_name}</span>
      </nav>

      <div className="px-4 sm:px-8 md:px-16 pb-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* IMAGE */}
         <div className="md:w-[40%] flex justify-center">
  <div
    ref={imgWrapperRef}
    className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px]
               md:w-[350px] md:h-[350px]
               rounded-2xl shadow-xl overflow-hidden"
    onMouseEnter={() => setShowZoom(true)}
    onMouseLeave={() => setShowZoom(false)}
    onMouseMove={handleMouseMove}
  >
    <img
      src={item.image}
      alt={item.product_name}
      className="w-full h-full object-cover rounded-2xl"
    />

    {showZoom && (
      <div
        style={{
          position: "absolute",
          left: `${zoomPos.x}%`,
          top: `${zoomPos.y}%`,
          transform: "translate(-50%, -50%)",
          width: ZOOM_SIZE,
          height: ZOOM_SIZE,
          backgroundImage: `url(${item.image})`,
          backgroundSize: `${ZOOM_SCALE * 100}%`,
          backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.2)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    )}
  </div>
</div>


          {/* CONTENT */}
          <div className="md:w-[60%]">
            <div className="bg-white rounded-2xl p-6 hover:bg-indigo-50 transition">
              <h1 className="text-2xl font-bold text-red-500 mb-6">
                {item.product_name}
              </h1>

              {/* OVERVIEW */}
             <div className="mb-8">
  <h2 className="text-xl font-bold mb-2 border-b pb-2">
    Overview
  </h2>

  <div
    className="text-justify text-gray-700 text-base leading-relaxed
               whitespace-normal break-all overflow-hidden"
    style={{
      maxWidth: "100%",
    }}
    dangerouslySetInnerHTML={{ __html: item.overview }}
  />
</div>


              {/* DESCRIPTION */}
              <div>
                <h2 className="text-xl font-bold mb-2 border-b pb-2">
                  Description
                </h2>
                <div
                  className="text-justify prose max-w-none text-gray-700 leading-relaxed 
                             break-words whitespace-normal overflow-hidden"
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
