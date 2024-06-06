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
  title: "MyProfile - Agil Aryaddinata Abbas",
  description:
    "Frontend Engineer and Product Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "MyProfile - Agil Aryaddinata Abbas",
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
    title: "MyProfile - Agil Aryaddinata Abbas",
    description:
      "Frontend Developer and Product Designer, currently studying Informatics Engineering. Focused on interfaces and experiences, working remotely from North Molucas, Indonesia.",
    url: "https://aryaddinata-site-v1.vercel.app/",
    siteName: "https://aryaddinata-site-v1.vercel.app/",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/114304280?s=400&u=c7a45f3f211e2944ea2bb7b309ab4d027de73a10&v=4",
        width: 1200,
        height: 630,
        alt: "MyProfile - Agil Aryaddinata Abbas",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyProfile - Agil Aryaddinata Abbas",
    description:
      "Frontend Developer and Product Designer, currently studying Informatics Engineering. Focused on interfaces and experiences, working remotely from North Molucas, Indonesia.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://avatars.githubusercontent.com/u/114304280?s=400&u=c7a45f3f211e2944ea2bb7b309ab4d027de73a10&v=4",
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
