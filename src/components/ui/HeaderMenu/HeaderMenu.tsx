"use client"; 

import React, { FC } from 'react';
import scss from './HeaderMenu.module.scss';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
interface IHeaderMenuProps {
    isMenuOpen: boolean
}

const HeaderMenu:FC<IHeaderMenuProps> = ({isMenuOpen }) => {
  return (
    <nav className={`${scss.menu} ${isMenuOpen ? scss.menuActive : ''}`}>
      <Link href={'/'} className={scss.navLink}>Home</Link>
      <Link href={'/contact'} className={scss.navLink}>Contact</Link>
      <Link href={'/about'} className={scss.navLink}>About</Link>
      <Link href={'/siginUp'} className={scss.navLink}>Sign Up</Link>
      <Link href={'/profile'}  className={scss.navLink}> <FaUserCircle /> </Link>

    </nav>
  );
};

export default HeaderMenu;
