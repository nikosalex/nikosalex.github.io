import "./globals.css";
import type { Metadata } from "next";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Η Βάφτιση μου",
  description: "Σας προσκαλούμε στη βάπτιση του γιου μας την Κυριακή 15 Ιουλίου 2025 & ώρα 12:00μ.μ. στον Ιερό Ναό Μεταμορφώσεως του Σωτήρος",
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
