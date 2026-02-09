"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-600 p-12 sm:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.cta.title}{" "}
              <span className="text-teal-100">{t.cta.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-8 py-4 text-base font-semibold text-teal-600 bg-white rounded-xl hover:shadow-xl hover:shadow-black/10 transition-all hover:-translate-y-0.5"
              >
                {t.cta.button}
              </a>
            </div>
            <p className="mt-4 text-sm text-teal-200">{t.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
