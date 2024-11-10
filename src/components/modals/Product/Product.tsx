"use client";
import { FC } from "react";
import scss from "./Product.module.scss";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa6";

interface ProductProps {
  photo: string;
  title: string;
  price: number;
  type: string;
  salePrice?: number;
  rating: number;
}
const Product: FC<ProductProps> = ({
  photo,
  title,
  price,
  type,
  salePrice,
  rating,
}) => {
  const router = useRouter();
  return (
    <div className={scss.product}>
      {photo.length ? (
        <div className={scss.imageBg}>
          <img src={photo} alt={title} />
          <button className={scss.faHearr}>
            <FaRegHeart />
          </button>
        </div>
      ) : (
        <div>
          <img
            className={scss.imageBg}
            src="https://thumbs.dreamstime.com/b/product-not-available-icon-flat-isolated-vector-eps-illustration-minimal-design-long-shadow-118523643.jpg"
            alt="hello"
          />
        </div>
      )}

      <h4>{title}</h4>
      {type == "sale" ? (
        <div className={scss.box}>
          <div className={scss.salebox}>
            <span className={scss.saleText}>${salePrice}</span>
            <span className={scss.price}>${price}</span>
          </div>
          <div className={scss.raitong}>
            <div>
              <FaStar
                style={{
                  color: rating > 0 ? "yellow" : "gray",
                }}
              />
            </div>
            <div>
              <FaStar
                style={{
                  color: rating > 1 ? "yellow" : "gray",
                }}
              />
            </div>
            <div>
              <FaStar
                style={{
                  color: rating > 2 ? "yellow" : "gray",
                }}
              />
            </div>
            <div>
              <FaStar
                style={{
                  color: rating > 3 ? "yellow" : "gray",
                }}
              />
            </div>
            <div>
              <FaStar
                style={{
                  color: rating > 4 ? "yellow" : "gray",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={scss.box}>
          <span className={scss.saleText}>${price}</span>
          <p>rating</p>
        </div>
      )}
      <button
        onClick={() => {
          router.push(`/cart`);
        }}
      >
        add to card
      </button>
    </div>
  );
};

export default Product;
