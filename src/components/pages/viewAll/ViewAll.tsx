"use client";
import { FC, useEffect, useState } from "react";
import scss from "./ViewAll.module.scss";
import {
  useGetProductCategoriesByCategoryQuery,
  useGetProductCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/api/products";
import Product from "@/components/modals/Product/Product";
import { useParams } from "next/navigation";

const ViewAll: FC = () => {
  const { view } = useParams();

  const [productValue, setProductValue] = useState<number>(20);
  const [value, setValue] = useState<string | null>(String(view) || null);

  const { data: product } = useGetProductsQuery(productValue);
  const { data: category } = useGetProductCategoriesQuery();
  const { data: categoryData } = useGetProductCategoriesByCategoryQuery(
    String(value)
  );
  console.log("🚀 ~ categoryData:", categoryData);

  const [allproduct, setAllProduct] = useState<Product[]>([]);

  useEffect(() => {
    if (product) {
      const saleProducts = product.map((el: any) => {
        const salePrice = +el.price * 0.8;
        return {
          ...el,
          salePrice,
          rating: Math.floor(Math.random() * 5) + 1,
        };
      });
      const categoryProduct = categoryData?.map((el: any) => {
        const salePrice = +el.price * 0.8;
        return {
          ...el,
          salePrice,
          rating: Math.floor(Math.random() * 5) + 1,
        };
      });
      setAllProduct(categoryProduct ? categoryProduct : saleProducts);
    }
  }, [product, productValue, value]);

  return (
    <section className={scss.ViewAll}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.allProductsHeader}>
            <h2>
              <span>All</span> Products
            </h2>
            <select onChange={(e) => setValue(e.target.value)} name="" id="">
              {category?.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div className={scss.Name}>
            <div className={scss.viewProducts}>
              {allproduct?.map((el) => (
                <div key={el.id}>
                  <Product
                    photo={el.image}
                    title={el.title}
                    price={+el.price}
                    type={"sale"}
                    salePrice={+el.salePrice}
                    rating={+el.rating}
                    id={el.id}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setProductValue(productValue + 20);
              }}
              className={scss.more}
            >
              more...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAll;
