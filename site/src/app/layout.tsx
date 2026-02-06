import NavBar from "@/components/NavBar";
import "./globals.css";

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
