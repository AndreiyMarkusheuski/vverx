import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.scss";

export const metadata = {
  title: "Вверх Техно",
  description: "Аренда техники Вверх техно",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <head></head>
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
