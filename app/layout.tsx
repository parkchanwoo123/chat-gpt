import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Antigravity AI | Premium Semi-SaaS CRM",
  description: "Korean startup-grade operational CRM portfolio platform",
  openGraph: {
    title: "Antigravity AI",
    description: "Operational semi-SaaS portfolio and CRM",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
