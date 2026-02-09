import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gessel - El Metodo Cientifico para la Practica Clinica Moderna",
  description:
    "Transforma tu practica clinica con un sistema integral: recoleccion de datos, notas clinicas, planes de tratamiento e insights accionables. Disenado con psicologos clinicos certificados.",
  keywords: [
    "notas clinicas",
    "terapia",
    "psicologia",
    "documentacion clinica",
    "SOAP",
    "DAP",
    "tratamiento",
    "IA",
    "HIPAA",
  ],
  openGraph: {
    title: "Gessel - El Metodo Cientifico para la Practica Clinica Moderna",
    description:
      "Sistema integral de practica clinica: datos, notas, tratamiento e insights. Para terapeutas que quieren practicar mejor.",
    type: "website",
    url: "https://gesell.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
