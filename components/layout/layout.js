import { Fragment, useState } from "react";

import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./footer";
import Header from "./header";

import asideSettings from "../../config/aside-settings";
import { email } from "../../config/contact";

export default function Layout({ children }) {
	const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(true);

	function toggleSidebarHandler(_evt) {
		setIsHiddenMobileMenu((prevState) => !prevState);
	}

	function navItemClickHandler(_evt) {
		document.querySelector("header").removeAttribute("class");
		setIsHiddenMobileMenu(true);
	}

	return (
		<Fragment>
			<Header
				isHiddenMobileMenu={isHiddenMobileMenu}
				navItemClickHandler={navItemClickHandler}
				toggleSidebar={toggleSidebarHandler}
			/>
			<AsideLeft links={asideSettings.links} />
			<AsideRight email={email} />
			<main className={!isHiddenMobileMenu ? "blur" : ""}>{children}</main>
			<Footer />
		</Fragment>
	);
}
