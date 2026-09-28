import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Carry-On Culture — Pack Light. Go Far.",
    template: "%s — Carry-On Culture",
  },
  description:
    "Carry-on packing guides, destination shopping edits, and in-trip product reviews for travelers who pack light.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://carryonculture.com"),
  openGraph: {
    title: "Carry-On Culture",
    description: "Pack light. Go far.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
