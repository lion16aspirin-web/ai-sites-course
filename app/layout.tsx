import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progressContext";
import { ThemeProvider } from "@/lib/themeContext";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Сайт без коду: від візитки до продажів",
  description: "Курс для абсолютних новачків. Від страху перед технологіями до власного сайту, який продає — за 14 уроків.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var r=s==='light'||((!s||s==='system')&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';document.documentElement.setAttribute('data-theme',r);})();`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ProgressProvider>
            {children}
            <ThemeToggle />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
