import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import BuiltByBadge from "@/components/ui/built-by-badge";

const basePath = process.env.NODE_ENV === "production" ? "/elect-righteous" : "";

export const metadata: Metadata = {
  title: {
    default: "Elect Righteous | Know Your Candidates. Vote Your Values.",
    template: "%s | Elect Righteous",
  },
  description:
    "Comprehensive, source-cited research on every candidate running in 2026 elections relevant to Hays, Kansas. 54 candidates, 12 races, 11,000+ public sources.",
  keywords: [
    "Hays Kansas elections",
    "2026 Kansas candidates",
    "Kansas voter guide",
    "Ellis County elections",
    "Kansas governor race 2026",
    "KS-01 candidates",
    "Kansas attorney general",
    "Kansas secretary of state",
    "USD 489 school board",
    "Hays city commission",
    "Ellis County officials",
    "Kansas ballot measures 2026",
  ],
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Elect Righteous | Know Your Candidates. Vote Your Values.",
    description:
      "Comprehensive, source-cited research on every candidate running in 2026 elections relevant to Hays, Kansas. 54 candidates, 12 races, 11,000+ public sources.",
    type: "website",
    siteName: "Elect Righteous",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&family=Montserrat:wght@400;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <BuiltByBadge />
      </body>
    </html>
  );
}
