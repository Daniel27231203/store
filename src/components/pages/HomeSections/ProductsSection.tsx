"use client";
import scss from "./ProductsSection.module.scss";
import { FC, useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useGetProductsQuery } from "@/redux/api/products";
import Product from "@/components/modals/Product/Product";
import { useRouter } from "next/navigation";

const ProductsSection: FC = () => {
  const router = useRouter();

  const [sale, setSale] = useState<Product[]>([]);

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
      setSale(saleProducts);
    }
  }, [data]);

  return (
    <section className={scss.ProductsSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.headerSale}>
            <div className={scss.title}>
              <div className={scss.style}></div>
              <h3>Our Products</h3>
            </div>
            <div className={scss.dinamica}>
              <div className={scss.block}>
                <h1>Explore Our Products</h1>
              </div>
              <div className={scss.arrow}>
                <button>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button>
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className={scss.saleProduct}>
            <div className={scss.saleProducts}>
              {sale || isLoading ? (
                sale.map((el) => (
                  <div key={el.id} className={scss.Name}>
                    <Product
                      photo={el.image}
                      title={el.title}
                      price={+el.price}
                      type={"PRODUCT"}
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
      </div>
    </section>
  );
};

export default ProductsSection;
