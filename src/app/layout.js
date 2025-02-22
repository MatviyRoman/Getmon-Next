import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GetMon – Найкраще рішення для моніторингу",
  description: "GetMon – це зручний сервіс для моніторингу та аналізу...",
  keywords: "моніторинг, аналітика, GetMon",
  openGraph: {
    title: "GetMon – Найкраще рішення для моніторингу",
    description: "GetMon допомагає відстежувати та аналізувати...",
    url: "https://getmon.pl",
    siteName: "GetMon",
    images: [
      {
        url: "https://getmon.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetMon – SEO оптимізований сайт",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
