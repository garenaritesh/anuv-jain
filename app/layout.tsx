import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuv Jain — The Music Journal",
  description: "A fan-made music journal exploring Anuv Jain's songs, story, and musical journey.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
