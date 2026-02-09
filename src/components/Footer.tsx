"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const linkSections = [
    t.footer.links.product,
    t.footer.links.resources,
    t.footer.links.company,
    t.footer.links.legal,
  ];

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {t.footer.brand}
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* Compliance badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {t.footer.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs text-gray-500"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkSections.map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
