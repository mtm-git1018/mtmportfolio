import type { Metadata } from "next";
import "@/app/style/globals.css";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";


export const metadata: Metadata = {
  title: "문태민 | 포트폴리오",
  description: "프론트엔드 개발자 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>
        <PageTransition>
          <Nav />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
