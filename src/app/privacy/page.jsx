"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/Slice/ArticleSlice";

export default function PrivacyPolicyClient() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const privacyArticle = items.find(
    (item) =>
      item.name?.toLowerCase().includes("privacy") ||
      item.name?.toLowerCase().includes("policy")
  );

  const content = privacyArticle?.articles?.[0];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 tracking-tight">
            {content ? content.title : "Privacy Policy"}   
          </h1>
          <p className="mt-4 text-gray-600 text-sm">
            Last updated · January 2026
          </p>
        </div>

        {/* LOADING SKELETON */}
        {loading && (
          <div className="space-y-6">
            {/* Skeleton Title */}
            <div className="h-10 w-3/5 mx-auto rounded bg-gray-200 animate-pulse"></div>
            {/* Skeleton Paragraphs */}
            <div className="space-y-4 mt-8">
              <div className="h-4 rounded bg-gray-200 animate-pulse"></div>
              <div className="h-4 rounded bg-gray-200 animate-pulse w-5/6"></div>
              <div className="h-4 rounded bg-gray-200 animate-pulse w-4/6"></div>
              <div className="h-4 rounded bg-gray-200 animate-pulse w-2/3"></div>
              <div className="h-4 rounded bg-gray-200 animate-pulse w-3/4"></div>
            </div>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="rounded-xl bg-red-50 p-6 text-center text-red-600 shadow">
            {error}
          </div>
        )}

        {/* CONTENT */}
        {!loading && content && (
          <div className="relative rounded-3xl bg-white shadow-xl border border-gray-100">

            {/* Accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-red-500" />

            <div className="p-8 md:p-14">
              <div
                className="prose prose-gray max-w-none prose-h2:mt-10 prose-h2:font-bold prose-p:leading-relaxed"
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
