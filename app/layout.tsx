import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/utils";
import NavigationMenu from "@/components/navigation-menu";

const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Golden Raspberry Awards",
  description:
    "The Golden Raspberry Awards, also known as the Razzies, is a mock award in recognition of the worst in film.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-primary antialiased mx-auto px-4 sm:px-6 lg:px-8",
          fontSans.className,
        )}
      >
        <main className="max-w-7xl mx-auto py-8">
          <NavigationMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
