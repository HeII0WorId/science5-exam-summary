import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "วิทยาศาสตร์ 5 (ว33101) — สรุปเตรียมสอบปลายภาค",
  description:
    "สรุปเนื้อหาเจาะลึก 46 ข้อ: ธรณีพิบัติภัย คลื่นกล เสียง แสงสี",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
