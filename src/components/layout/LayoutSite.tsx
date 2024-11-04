import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutSite.module.scss";
import ReduxProvider from "@/providers/ReduxProvider";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <div className={scss.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ReduxProvider>
  );
};

export default LayoutSite;
