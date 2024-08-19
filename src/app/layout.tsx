import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@coinbase/onchainkit/styles.css";

import "./globals.css";
import OnchainProviders from "@/providers/OnchainProviders";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Base Earn",
  description: "BaseEarn is a decentralized based project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <OnchainProviders>
        <body className={inter.className} style={{ scrollBehavior: "smooth" }}>
          <NavBar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
      </OnchainProviders>
    </html>
  );
}
