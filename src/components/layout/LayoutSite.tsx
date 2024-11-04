import { FC, ReactNode } from "react";
import Footer from "./Footer/Footer";
import SignUp from "../pages/SignUp";

interface LayoutProps {
	children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default LayoutSite;
