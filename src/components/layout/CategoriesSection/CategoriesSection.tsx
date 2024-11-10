import React from 'react';
import scss from './CategoriesSection.module.scss';
import { MdOutlineSmartphone } from 'react-icons/md';
import { VscPinned } from "react-icons/vsc";
import { SlUser, SlUserFemale } from 'react-icons/sl';

type Category = {
  name: string;
  icon:JSX.Element | string; 
};

const categories: Category[] = [
  { name: 'Electronics', icon: <MdOutlineSmartphone />},
  { name: 'Jewelry', icon: <VscPinned />  },
  { name: "Men's Clothing", icon: <SlUser />  },
  { name: "Women's Clothing", icon: <SlUserFemale />},
];

const CategoriesSection: React.FC = () => {
  return (
  <section className={scss.categoriesSecton}>
  <div className={scss.content}>
  <div className={scss.categories}>
      <h2>Browse By Category</h2>
      <div className={scss.categories__container}>
        {categories.map((category, index) => (
          <div className={scss.category} key={index}>
            <div className={scss.category__icon}>{category.icon}</div>
            <div className={scss.category__name}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </section>
  );
};

export default CategoriesSection;