"use client";
import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutSite.module.scss";
import ReduxProvider from "@/providers/ReduxProvider";
import SessionProvider from "@/providers/SessionProvider";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <div className={scss.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default LayoutSite;

  