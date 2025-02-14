import "normalize.css";
import { poppins } from "./fonts";
import "@/styles/globals.scss";
import LayoutHeader from "@/components/LayoutHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <title>Showcase</title>
      </head>
      <body>
        <LayoutHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
