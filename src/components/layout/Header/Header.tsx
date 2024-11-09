"use client"; // Добавьте эту строку

import React, { useState } from "react";
import scss from "./Header.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import HeaderMenu from "@/components/ui/HeaderMenu/HeaderMenu";
import Link from "next/link";
import { links } from "@/constants/link";
import { useGetMeQuery } from "@/redux/api/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useGetMeQuery();
  console.log("🚀 ~ Header ~ data:", data);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>Exclusive</div>
          <nav className={scss.nav}>
            {links.map((el, index) => (
              <div key={index}>
                {!data ? (
                  index > -1 && index < 3 ? (
                    <Link href={el.link} className={scss.navLink}>
                      {el.name}
                    </Link>
                  ) : (
                    <Link
                      href={el.link}
                      className={`${scss.navLink} ${scss.signUP}`}
                    >
                      {el.name}
                    </Link>
                  )
                ) : (
                  <Link href={el.link} className={scss.navLink}>
                    {el.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className={scss.searchContainer}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={scss.searchInput}
            />
            <button className={scss.searchButton}>
              <span role="img" aria-label="search">
                <CiSearch />
              </span>
            </button>
          </div>
          <div className={scss.icons}>
            <span aria-label="favorites">
              <MdFavoriteBorder />
            </span>
            <span aria-label="cart">
              <PiShoppingCartSimpleLight />
            </span>
            <span
              className={scss.menuBtn}
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MdOutlineMenu />
            </span>

            {data ? (
              <Link href={"/profile"} className={scss.adminBtn}>
                {" "}
                <img src={data.profile.photo} alt={data.profile.username} />
              </Link>
            ) : null}

          </div>

          <HeaderMenu isMenuOpen={isMenuOpen} />

          <div
            className={`overlay ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
