import NavBar from "@/components/NavBar";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}

export const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});
