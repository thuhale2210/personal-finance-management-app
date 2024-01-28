import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

export const metadata: Metadata = {
  title: "Golden Pig",
  description: "Keep track of your financial records and help you move towards financial freedom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
