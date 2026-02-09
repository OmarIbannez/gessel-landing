"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t.pricing.title}{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              {t.pricing.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? "bg-white border-teal-200 shadow-xl shadow-teal-500/10 scale-105"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xs font-semibold rounded-full">
                  Popular
                </div>
              )}

              {/* Plan header */}
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              {/* CTA */}
              <a
                href="#cta"
                className={`mt-6 block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-teal-500/25"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features list */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-teal-500 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trial note */}
        <p className="mt-12 text-center text-sm text-gray-400">
          {t.pricing.trialNote}
        </p>
      </div>
    </section>
  );
}
