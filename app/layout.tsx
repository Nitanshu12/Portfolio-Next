import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
// import LayoutWrapper from "@/components/LayoutWrapper"; // update path as needed



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitanshu's Portfolio",
  description: "Responsive and Minimalist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Avoid putting class/style on <html>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <LayoutWrapper> */}
        <ThemeProvider
          attribute="class" // this will add 'dark' or 'light' class to <html>
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      {/* </LayoutWrapper>   */}
      </body>
    </html>
  );
}
