import Header from "../header";
import Footer from "../footer";

export const metadata = {
  title: "Вверх Техно",
  description: "Аренда техники Вверх техно",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <>
  <Header />
    {children}
  <Footer />
  </>
);

export default RootLayout;
