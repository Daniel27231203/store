"use client";
import scss from "./BestSelling.module.scss";
import { FC, useEffect, useState } from "react";
import { useGetProductsQuery } from "@/redux/api/products";
import Product from "@/components/modals/Product/Product";
import { useRouter } from "next/navigation";

const BestSelling: FC = () => {
  const router = useRouter();

  const [Bestsale, setBestSale] = useState<Product[]>([]);

  const { data, isLoading } = useGetProductsQuery(10);
  useEffect(() => {
    if (data) {
      const saleProducts = data.map((el: any) => {
        const salePrice = el.price * 0.8;
        return {
          ...el,
          salePrice,
          rating: Math.floor(Math.random() * 5) + 1,
        };
      });
      setBestSale(saleProducts);
    }
  }, [data]);
  return (
    <section className={scss.BestSelling}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.headerSale}>
            <div className={scss.title}>
              <div className={scss.style}></div>
              <h3>This Month</h3>
            </div>
            <div className={scss.dinamica}>
              <h1>Best Selling Products</h1>
              <button
                onClick={() => {
                  router.push("/viewAll");
                }}
                className={scss.all}
              >
                view all products
              </button>
            </div>
          </div>
          <div className={scss.saleProducts}>
            {Bestsale || isLoading ? (
              Bestsale.map((el) => (
                <div key={el.id} className={scss.Name}>
                  <Product
                    photo={el.image}
                    title={el.title}
                    price={+el.price}
                    type={"sale"}
                    salePrice={+el.salePrice}
                    rating={el.rating}
                    id={el.id}
                  />
                </div>
              ))
            ) : (
              <p>load...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
