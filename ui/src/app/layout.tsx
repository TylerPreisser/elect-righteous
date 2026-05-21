import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import BuiltByBadge from "@/components/ui/built-by-badge";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";
import { SITE_URL, withSiteBasePath } from "@/lib/site-env";

const previewImage = withSiteBasePath("/og-image-v3.png");
const siteDescription = `A source-cited voter guide for Hays, Kansas and Kansas 2026 elections. ${V2_CANDIDATES.length} profiles, ${ELECTIONS.length} races, and public-source trails for voters who want to steward their ballot carefully.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Elect Righteous",
  title: {
    default: "Elect Righteous | Know the Record. Steward Your Vote.",
    template: "%s | Elect Righteous",
  },
  description: siteDescription,
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
    icon: [
      { url: withSiteBasePath("/favicon.ico"), sizes: "any" },
      { url: withSiteBasePath("/favicon.svg"), type: "image/svg+xml" },
      { url: withSiteBasePath("/icon-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: withSiteBasePath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  manifest: withSiteBasePath("/site.webmanifest"),
  openGraph: {
    title: "Elect Righteous | Know the Record. Steward Your Vote.",
    description: siteDescription,
    url: withSiteBasePath("/"),
    type: "website",
    siteName: "Elect Righteous",
    locale: "en_US",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Elect Righteous - Know the Record. Steward Your Vote.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elect Righteous | Know the Record. Steward Your Vote.",
    description:
      "Source-cited candidate research for Kansas voters.",
    images: [previewImage],
  },
  appleWebApp: {
    title: "Elect Righteous",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbfb" },
    { media: "(prefers-color-scheme: dark)", color: "#071822" },
  ],
  colorScheme: "light dark",
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("er-theme");
    var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (systemDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
        <ScrollReveal />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <BuiltByBadge />
      </body>
    </html>
  );
}
