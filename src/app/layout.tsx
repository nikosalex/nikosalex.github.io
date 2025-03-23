import "./globals.css";
import type { Metadata } from "next";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Η Βάφτιση μου",
  description: "Σας προσκαλούμε στη βάπτιση του γιου μας την Κυριακή 29 Ιουνίου 2025 & ώρα 11:00π.μ. στον Ιερό Ναό Αγίου Αθανασίου στο Πολύδροσο Χαλανδρίου",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
