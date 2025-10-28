import type { Metadata } from "next";
import "./globals.css";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Social Media Agency Scaling - Add $20K-$50K Monthly Revenue | Data-Driven Systems",
  description: "Implement our proven data-driven systems that will add $20K-$50K per month to your social media agency. Guaranteed results or we'll wire you $7,500.",
  keywords: "social media agency scaling, agency coaching, agency revenue growth, social media agency systems, agency MRR growth",
  authors: [{ name: "TGN Media LLC" }],
  openGraph: {
    title: "Social Media Agency Scaling - Add $20K-$50K Monthly Revenue",
    description: "Implement our proven data-driven systems that will add $20K-$50K per month to your social media agency. Guaranteed results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Agency Scaling - Add $20K-$50K Monthly Revenue",
    description: "Implement our proven data-driven systems that will add $20K-$50K per month to your social media agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
