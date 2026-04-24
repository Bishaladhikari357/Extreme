"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/Slice/ArticleSlice";

/* ==========================
   Skeleton Loader Component
========================== */
function TermsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="h-10 w-2/5 bg-gray-300 rounded mx-auto animate-pulse"></div>
      <div className="h-6 w-1/5 bg-gray-200 rounded mx-auto animate-pulse"></div>

      {/* Content skeleton */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse" />
      ))}
    </div>
  );
}

/* ==========================
   Terms & Conditions Page
========================== */
export default function TermsClient() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  // ✅ Find Terms & Conditions article
  const termsArticle = items.find((item) =>
    item.name?.toLowerCase().includes("terms")
  );

  const content = termsArticle?.articles?.[0];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {content ? content.title : "Terms & Conditions"}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated · January 2026
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading && <TermsSkeleton />}

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-red-50 p-6 text-center text-red-600 shadow">
            {error}
          </div>
        )}

        {/* Content */}
        {!loading && content && (
          <div className="relative rounded-3xl bg-white shadow-xl border border-gray-100 mt-10">

            {/* Accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-red-500" />

            <div className="p-8 md:p-14">
              <div
                className="prose prose-gray max-w-none prose-h2:font-bold prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: content.description,
                }}
              />
            </div>
          </div>
        )}

       
      </div>
    </section>
  );
}
