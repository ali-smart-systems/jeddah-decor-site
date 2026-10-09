
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FloatingContact from "../components/FloatingContact";
import { isVercelPreview, site } from "../lib/site";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101a1d",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  title: {
    default: `${site.brand} | ديكورات داخلية فاخرة في جدة`,
    template: `%s | ${site.brand}`,
  },

  description:
    "معلم ديكورات في جدة لتنفيذ ديكورات الجبس، بديل الخشب والرخام، ديكورات الجدران والإضاءة والتشطيبات الداخلية. اتصل أو تواصل عبر واتساب.",

  alternates: {
    canonical: "/",
  },

  robots: isVercelPreview
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : {
        index: true,
        follow: true,
      },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: site.brand,
    title: `${site.brand} | ديكورات داخلية فاخرة في جدة`,
    description: "ديكورات داخلية في جدة بلمسات فنية وتشطيبات متقنة.",
    url: site.domain,
  },

  twitter: {
    card: "summary",
    title: `${site.brand} | ديكورات داخلية فاخرة في جدة`,
    description: "ديكورات داخلية في جدة بلمسات فنية وتشطيبات متقنة.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.brand,
    description: "تنفيذ ديكورات داخلية وتشطيبات فنية في جدة.",
    telephone: `+${site.phoneInternational}`,
    areaServed: {
      "@type": "City",
      name: "جدة",
    },
    url: site.domain,
    sameAs: [
      site.instagram,
      "https://www.tiktok.com/@user5095887730342",
    ],
  };

  const safeSchema = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeSchema }}
        />

        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="shell footer-inner">
            <div>
              <strong>{site.brand}</strong>
              <p>
                ديكورات داخلية وتشطيبات فنية في جدة، المملكة العربية السعودية.
              </p>
            </div>

            <div>
              <a href={`tel:+${site.phoneInternational}`}>
                {site.phoneDisplay}
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                إنستغرام
              </a>

              <a
                href="https://www.tiktok.com/@user5095887730342"
                target="_blank"
                rel="noopener noreferrer"
              >
                تيك توك
              </a>
            </div>
          </div>

          <div className="shell copyright">
            © {new Date().getFullYear()} {site.brand}. جميع الحقوق محفوظة.
          </div>
        </footer>

        <FloatingContact />
      </body>
    </html>
  );
}
