"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Sale.module.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useGetProductsQuery } from "@/redux/api/products";
import Product from "@/components/modals/Product/Product";
import { useRouter } from "next/navigation";

const Sale: FC = () => {
  const date = new Date();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const router = useRouter();

  const [sale, setSale] = useState<Product[]>([]);
  console.log("🚀 ~ sale:", sale);

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
    <section className={scss.Sale}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.headerSale}>
            <div className={scss.title}>
              <div className={scss.style}></div>
              <h3>Today's</h3>
            </div>
            <div className={scss.dinamica}>
              <div className={scss.block}>
                <h1>Flash Sales</h1>
                <div className={scss.day}>
                  <div className={scss.dayBox}>
                    <span>Days</span>
                    <h4>{day}</h4>
                  </div>
                  <span className={scss.dote}>:</span>
                  <div className={scss.dayBox}>
                    <span>Hours</span>
                    <h4>{hours}</h4>
                  </div>
                  <span className={scss.dote}>:</span>

                  <div className={scss.dayBox}>
                    <span>Minutes</span>
                    <h4>{minutes}</h4>
                  </div>
                  <span className={scss.dote}>:</span>

                  <div className={scss.dayBox}>
                    <span>Seconds</span>
                    <h4>{seconds}</h4>
                  </div>
                </div>
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
                      type={"sale"}
                      salePrice={+el.salePrice}
                      rating={el.rating}
                      id={el.id}
                      user={el.user}
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

export default Sale;
