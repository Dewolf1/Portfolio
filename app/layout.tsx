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

const BASE_URL = "https://mohdadeeb.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mohd Adeeb | Python Developer, AI Architect & Startup Founder — India",
    template: "%s | Mohd Adeeb",
  },
  description:
    "Mohd Adeeb — Python Developer, AI Architect, and Startup Founder based in New Delhi, India. B.Tech CST student at ADGIPS (GGSIPU). Co-Founder at Herlyy and Founder at Jenwin Technologies. Expert in Generative AI, Agentic Workflows, LangChain, OpenAI, Full-Stack Web Development, and Freelance project delivery. 15+ live projects. 6+ certifications. Available for hire.",
  keywords: [
    // Primary name targets — most important for ranking "Mohd Adeeb"
    "Mohd Adeeb",
    "Mohammad Adeeb",
    "Mohammed Adeeb",
    "Mohd Adeeb Developer",
    "Mohd Adeeb Portfolio",
    "Mohd Adeeb India",
    "Mohd Adeeb Delhi",
    "Mohd Adeeb AI",
    "Mohd Adeeb Python",
    "Mohd Adeeb Jenwin",
    "Mohd Adeeb Herlyy",
    "Mohd Adeeb ADGIPS",
    "Dewolf1",
    "Dewolf1 GitHub",
    // Role-based
    "Python Developer India",
    "Python Developer Delhi",
    "AI Architect India",
    "Generative AI Developer India",
    "Agentic AI Developer",
    "Agentic Workflows",
    "LangChain Developer",
    "OpenAI GPT-4 Developer",
    "Machine Learning Engineer India",
    "Full Stack Developer India",
    "Full Stack Developer Delhi",
    "Next.js Developer India",
    "React Developer India",
    "Flask Developer",
    "FastAPI Developer",
    "Node.js Developer India",
    "Firebase Developer",
    "Electron Developer",
    "Freelance Web Developer India",
    "WordPress Developer India",
    "WooCommerce Developer India",
    // Startup / Founder
    "Startup Founder India",
    "Jenwin Founder",
    "Jenwin Technologies",
    "jenw.in",
    "Herlyy Co-Founder",
    "herlyy.com",
    // Clients & Projects
    "Zaanji",
    "Zaanji Pret",
    "Halima Fashion Delhi",
    "Talbiya Collection",
    "US BRO",
    "VisaOVisa",
    "Raja Masale",
    "Glass India Company",
    "Hospimedico",
    "Zaanji Shop Manager",
    // Technical
    "AI Chatbot Developer",
    "LLM Integration",
    "RAG Pipelines",
    "POS System Developer",
    "Desktop App Developer",
    "Technical Head BIT YUG",
    "Oracle OCI Certified",
    "ADGIPS Student Developer",
    "GGSIPU B.Tech",
    "Portfolio Mohd Adeeb",
  ],
  authors: [{ name: "Mohd Adeeb", url: BASE_URL }],
  creator: "Mohd Adeeb",
  publisher: "Mohd Adeeb",
  category: "Technology",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: BASE_URL,
    title: "Mohd Adeeb | Python Developer, AI Architect & Startup Founder",
    description:
      "Mohd Adeeb — Python Developer & AI Architect from New Delhi, India. Founder of Jenwin Technologies. Co-Founder of Herlyy. 15+ live projects. Expert in Generative AI & Full-Stack Dev.",
    siteName: "Mohd Adeeb — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohd Adeeb — Python Developer & AI Architect | mohdadeeb.onrender.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Adeeb | Python Developer, AI Architect & Startup Founder",
    description:
      "Python Developer & AI Architect from Delhi, India. Founder @Jenwin · Co-Founder @Herlyy · Generative AI · Full-Stack · Freelance.",
    images: ["/og-image.png"],
    creator: "@mohdadeeb",
    site: "@mohdadeeb",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "",
  },
};

// ── Multi-schema JSON-LD Graph (Person + WebSite + WebPage + Organization) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Mohd Adeeb",
      alternateName: ["Mohammad Adeeb", "Mohammed Adeeb", "Dewolf1"],
      url: BASE_URL,
      image: `${BASE_URL}/og-image.png`,
      jobTitle: "Python Developer & AI Architect",
      worksFor: [
        {
          "@type": "Organization",
          name: "Jenwin Technologies",
          url: "https://jenw.in",
        },
      ],
      description:
        "Mohd Adeeb is a Python Developer, AI Architect, and Startup Founder based in New Delhi, India. He is the Founder of Jenwin Technologies and Co-Founder of Herlyy. He specializes in Generative AI, Agentic Workflows, LangChain, OpenAI integrations, and Full-Stack Web Development.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      email: "mdadeeb.2003@gmail.com",
      sameAs: [
        "https://github.com/Dewolf1",
        "https://linkedin.com/in/mohd-adeeb",
        "https://jenw.in",
        "https://www.herlyy.com",
        BASE_URL,
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "ADGIPS — Aryabhatta Delhi Group of Institutions",
        parentOrganization: {
          "@type": "EducationalOrganization",
          name: "GGSIPU — Guru Gobind Singh Indraprastha University",
        },
      },
      knowsAbout: [
        "Python",
        "Generative AI",
        "Agentic Workflows",
        "LangChain",
        "OpenAI",
        "Full-Stack Development",
        "Next.js",
        "React",
        "Firebase",
        "Node.js",
        "Flask",
        "FastAPI",
        "Electron.js",
        "Machine Learning",
        "Web Development",
        "WordPress",
        "WooCommerce",
        "Freelance Web Development",
        "Startup Founding",
        "POS Systems",
        "Desktop Application Development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Python Developer & AI Architect",
        occupationLocation: {
          "@type": "City",
          name: "New Delhi, India",
        },
        skills:
          "Python, Generative AI, LangChain, OpenAI, Node.js, Next.js, React, Firebase, Electron.js, WordPress",
      },
      founder: {
        "@type": "Organization",
        "@id": "https://jenw.in/#org",
        name: "Jenwin Technologies",
        url: "https://jenw.in",
        description:
          "Full-service product studio for Indian founders — SaaS, Web Apps, App Development, UI/UX, and custom software.",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Mohd Adeeb — Portfolio",
      description:
        "Official portfolio website of Mohd Adeeb, Python Developer and AI Architect from India.",
      publisher: { "@id": `${BASE_URL}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Mohd Adeeb | Python Developer, AI Architect & Startup Founder",
      description:
        "Mohd Adeeb's official portfolio — Python Developer, AI Architect, and Startup Founder from New Delhi, India. Founder of Jenwin. Co-Founder of Herlyy. 15+ projects.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Mohd Adeeb Portfolio",
            item: BASE_URL,
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://jenw.in/#org",
      name: "Jenwin Technologies",
      url: "https://jenw.in",
      founder: { "@id": `${BASE_URL}/#person` },
      description:
        "Jenwin Technologies is a product studio founded by Mohd Adeeb, building SaaS, Web Apps, and custom software for Indian founders.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Delhi",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="author" content="Mohd Adeeb" />
        <meta name="copyright" content="Mohd Adeeb" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi, India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
