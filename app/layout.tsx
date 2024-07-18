import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // Ensure correct path to Providers
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskTuner",
  description: "Organizes your tasks and predicts what's next using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={null}> {/* Provide session as null initially */}
          {children}
          <Toaster/>
        </Providers>
      </body>
      
    </html>
  );
}
