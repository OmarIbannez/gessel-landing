"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Method />
        <Features />
        <SocialProof />
        <Pricing />
        <Security />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
