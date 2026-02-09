"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">gessel</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#method" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.method}
            </a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.features}
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.security}
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded border border-gray-200 hover:border-gray-300"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#cta"
              className="text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3">
              <a href="#method" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                {t.nav.method}
              </a>
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                {t.nav.features}
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                {t.nav.pricing}
              </a>
              <a href="#security" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                {t.nav.security}
              </a>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => setLang(lang === "es" ? "en" : "es")}
                  className="text-sm text-gray-500 hover:text-gray-900 px-2 py-1 rounded border border-gray-200"
                >
                  {lang === "es" ? "EN" : "ES"}
                </button>
                <a
                  href="#cta"
                  className="text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
