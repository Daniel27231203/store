import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutSite.module.scss";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
