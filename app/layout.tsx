import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cursos técnicos | Etec Sales Gomes",
  description:
    "Conheça os cursos técnicos e consulte as matrizes curriculares da Etec Sales Gomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
