"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            {t.socialProof.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t.socialProof.title}{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              {t.socialProof.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {t.socialProof.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 bg-white rounded-2xl border border-gray-100"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.socialProof.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative p-6 bg-white rounded-2xl border border-gray-100"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-teal-100 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
