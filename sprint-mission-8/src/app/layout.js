import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./globals.css";

export const metadata = {
  title: "판다마켓",
  description: "판다마켓 - 중고거래 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
