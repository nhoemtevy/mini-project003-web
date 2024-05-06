"use client";
import "@/app/globals.css";
import SessionWrapper from "../SessionProvider";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
