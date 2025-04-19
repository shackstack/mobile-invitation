import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const notosanskr = Noto_Sans_KR({
  subsets: ["latin"],
});
const notoserifkr = Noto_Serif_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "청첩장",
  description: "김광호, 김가영의 결혼식 (7월 25일)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notosanskr.className} ${notoserifkr.className}`}>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_API_KEY}&autoload=false`}
          strategy="beforeInteractive"
        ></Script>
        {children}
      </body>
    </html>
  );
}
