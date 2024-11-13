"use client";
import React from "react";
import scss from "./CategoriesSection.module.scss";
import { MdOutlineSmartphone } from "react-icons/md";
import { VscPinned } from "react-icons/vsc";
import { SlUser, SlUserFemale } from "react-icons/sl";
import { useRouter } from "next/navigation";

type Category = {
  name: string;
  icon: JSX.Element | string;
};

const categories: Category[] = [
  { name: "electronics", icon: <MdOutlineSmartphone /> },
  { name: "jewelry", icon: <VscPinned /> },
  { name: "men's clothing", icon: <SlUser /> },
  { name: "women's clothing", icon: <SlUserFemale /> },
];

const CategoriesSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className={scss.categoriesSecton}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.categories}>
            <h2>Browse By Category</h2>
            <div className={scss.categories__container}>
              {categories.map((category, index) => (
                <div
                  className={scss.category}
                  key={index}
                  onClick={() => {
                    router.push(`/viewAll/${category.name}`);
                  }}
                >
                  <div className={scss.category__icon}>{category.icon}</div>
                  <div className={scss.category__name}>{category.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
