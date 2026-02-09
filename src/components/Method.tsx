"use client";

import { useLanguage } from "@/lib/LanguageContext";

const stepIcons = [
  // Data Collection
  <svg key="collect" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>,
  // Clinical Notes
  <svg key="notes" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  // Treatment Planning
  <svg key="treatment" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>,
  // Insights
  <svg key="insights" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-5.5m3 5.5v-3.5m3 3.5v-1.5" />
  </svg>,
];

const stepColors = [
  { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", icon: "text-blue-500", dot: "bg-blue-500" },
  { bg: "bg-teal-50", border: "border-teal-100", text: "text-teal-600", icon: "text-teal-500", dot: "bg-teal-500" },
  { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-600", icon: "text-emerald-500", dot: "bg-emerald-500" },
  { bg: "bg-violet-50", border: "border-violet-100", text: "text-violet-600", icon: "text-violet-500", dot: "bg-violet-500" },
];

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="method" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            {t.method.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t.method.title}{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              {t.method.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.method.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 via-emerald-200 to-violet-200" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {t.method.steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl ${stepColors[i].bg} ${stepColors[i].border} border flex items-center justify-center ${stepColors[i].icon}`}
                  >
                    {stepIcons[i]}
                  </div>
                  <span className={`text-sm font-bold ${stepColors[i].text}`}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {step.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${stepColors[i].dot} shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow between steps (mobile) */}
                {i < 3 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flow label */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-500 shadow-sm">
              <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {t.method.connectorLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
