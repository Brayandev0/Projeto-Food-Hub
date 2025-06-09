
import { HeaderPrincipal } from "@/components/header/header";
import "./globals.css";
import Head from "next/head";
import FooterPrincipal from "@/components/footer/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Food Hub</title>
        <meta name="description" content="Delicious food delivered to your door" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <HeaderPrincipal />
        
        {children}
        <FooterPrincipal />
      </body>
    </html>
  );
}
