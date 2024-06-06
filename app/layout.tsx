import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "A.A.A",
  description:
    "Frontend Engineer and Product Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "A.A.A",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "A.A.A",
    description:
      "Frontend Developer and Product Designer, currently studying Informatics Engineering. Focused on interfaces and experiences, working remotely from North Molucas, Indonesia.",
    url: "https://aryaddinata-site-v1.vercel.app/",
    siteName: "https://aryaddinata-site-v1.vercel.app/",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/114304280?s=400&u=ffbd2057d0d8be6b1abe767e861c4a88eb350b6d&v=4",
        width: 1200,
        height: 630,
        alt: "A.A.A",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.A.A",
    description:
      "Frontend Developer and Product Designer, currently studying Informatics Engineering. Focused on interfaces and experiences, working remotely from North Molucas, Indonesia.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://avatars.githubusercontent.com/u/114304280?s=400&u=ffbd2057d0d8be6b1abe767e861c4a88eb350b6d&v=4",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
