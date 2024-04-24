import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
//2 options either metadata object or generateMetadata function
//more info: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object
export const metadata: Metadata = {
  title: {
    template: "%s | Zuzana's personal development project",
    default: "Zuzana's personal development project",
  },
  description: "Personal development project for Shape Games",
  keywords: ["personal development", "shape games", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader height={4} showSpinner={false} />
        <AuthProvider>
          <main className="h-screen flex justify-center items-center">
            {children}
          </main>
        </AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
