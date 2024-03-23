import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuzana's personal development project",
  description: "Personal development project for Shape Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <main className="h-screen flex justify-center items-center">
              {children}
            </main>
          </ThemeProvider>
        </AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
