import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.module.scss";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const noto = Noto_Sans_JP({ subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"] });

export const metadata: Metadata = {
  title: "Kana Typing Trainer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Theme appearance={"dark"}>{children}</Theme>
        </body>
    </html>
  );
}
