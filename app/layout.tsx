import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Grimoire",
  description: "A living chronicle of family history, memories, and lineage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
