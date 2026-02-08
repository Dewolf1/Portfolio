import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohd Adeeb | Python Developer & AI Architect",
  description: "Python Developer & Technical Leader specializing in Generative AI, Agentic workflows, and system integration. B.Tech student with 4+ certifications and 10+ projects.",
  keywords: ["Mohd Adeeb", "Python Developer", "AI Architect", "Technical Leader", "Generative AI", "Agentic AI", "LangChain", "Machine Learning", "Web Development"],
  authors: [{ name: "Mohd Adeeb" }],
  creator: "Mohd Adeeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohdadeeb.dev",
    title: "Mohd Adeeb | Python Developer & AI Architect",
    description: "Python Developer & Technical Leader specializing in Generative AI, Agentic workflows, and system integration",
    siteName: "Mohd Adeeb Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Adeeb | Python Developer & AI Architect",
    description: "Python Developer & Technical Leader specializing in Generative AI, Agentic workflows, and system integration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
