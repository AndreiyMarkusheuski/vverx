import Header from "../components/header";
import './globals.scss';

export const metadata = {
  title: "Вверх Техно",
  description: "Аренда техники Вверх техно",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
