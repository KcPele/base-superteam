import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@coinbase/onchainkit/styles.css";

import "./globals.css";
import OnchainProviders from "@/providers/OnchainProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Base Super Team",
  description: "Super Team is a decentralized based project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <OnchainProviders>
        <body className={inter.className}>{children}</body>
      </OnchainProviders>
    </html>
  );
}
