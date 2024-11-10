import React from "react";
import scss from "./Hero.module.scss";
import { FaChevronRight } from "react-icons/fa";



import SlickPage from "./SlickPage";


const Hero = () => {
  return (
    <div className={scss.Hero}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.link}>
            <div className={scss.text}>
              <div className={scss.spans}>
                <h1>Womans Fashion</h1>
                <h1>Mens Fashion</h1>
              </div>
              <div className={scss.spans}>
                <span>
                  <FaChevronRight />
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </div>
            </div>
            <h2>Electronics</h2>
            <h2>Home & Lifestyle</h2>
            <h2>Medicine</h2>
            <h2>Sports & Outdoor</h2>
            <h2>Bodys & Toys</h2>
            <h2>Groceries & Pets</h2>
            <h2>Health & Beauty</h2>
          </div>
          <div className={scss.ruler}></div>
         <SlickPage/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
