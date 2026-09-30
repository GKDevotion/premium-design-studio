import React, { useState } from 'react';
import { PageView, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/studioData';
import { ArrowRight, BookOpen, Clock, Calendar, X, Share2 } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Interior Design Ideas',
    'Home Design',
    'Office Design',
    'Budget Guide',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div className="space-y-16 py-12">
        {/* 1. Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Journal & Spatial Intelligence
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Interior Ideas, Budget Guides & Architectural Insights
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              Expert advice on space planning, material durability, kitchen surfaces, corporate acoustics, and transparent budgeting.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl overflow-x-auto max-w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 2. Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setReadingPost(post)}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs cursor-pointer hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                      <span className="font-medium text-amber-800 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-950 group-hover:text-amber-800">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Full Article Reader Modal */}
      {readingPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-neutral-200 flex items-center justify-between z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                {readingPost.category} · {readingPost.readTime}
              </span>
              <button
                onClick={() => setReadingPost(null)}
                className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 leading-tight">
                {readingPost.title}
              </h2>

              <div className="aspect-16/9 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={readingPost.image}
                  alt={readingPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose text-neutral-800 space-y-4 text-sm sm:text-base font-light leading-relaxed">
                {readingPost.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-light">
                  Published by Premium Design Studio Editorial
                </span>
                <button
                  onClick={() => {
                    setReadingPost(null);
                    onOpenQuote();
                  }}
                  className="px-4 py-2 bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-neutral-800 cursor-pointer"
                >
                  Consult on this topic
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
