"use client";
import { FC } from "react";
import scss from "./Product.module.scss";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { useGetMeQuery } from "@/redux/api/auth";
import { useDeleteProductMutation } from "@/redux/api/products";
import { MdOutlineDelete } from "react-icons/md";
import useStore from "@/zustand/store";

const Product: FC<ProductProps> = ({
  photo,
  title,
  price,
  type,
  salePrice,
  rating,
  id,
  user,
}) => {
  const router = useRouter();
  const { data } = useGetMeQuery();
  const [deleteProductMutation] = useDeleteProductMutation();
  const { addToCart, basket } = useStore();

  const handleDelete = async () => {
    try {
      await deleteProductMutation(id).unwrap();
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

  const renderStars = (rating: number) => (
    <>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          style={{ color: index < rating ? "yellow" : "gray" }}
        />
      ))}
    </>
  );

  const handleAddCart = () => {
    if (basket.some((el) => el.id === id)) {
      router.push("/cart");
    } else {
      const basketData: BasketProduct = {
        id,
        title,
        price,
        salePrice,
        photo,
        quantity: 1,
      };
      addToCart({ ...basketData });
      router.push("/cart");
    }
  };

  return (
    <div className={scss.product}>
      {photo.length ? (
        <div className={scss.imageBg}>
          <img src={photo} alt={title} />
          <div className={scss.blockIcon}>
            <button>
              <FaRegHeart />
            </button>
            {+data?.profile.id === +user.id ? (
              <>
                <button onClick={() => router.push(`/create/${id}`)}>
                  <IoPencil />
                </button>
                <button onClick={handleDelete}>
                  <MdOutlineDelete />
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          <img
            className={scss.imageBg}
            src="https://thumbs.dreamstime.com/b/product-not-available-icon-flat-isolated-vector-eps-illustration-minimal-design-long-shadow-118523643.jpg"
            alt="Product not available"
          />
        </div>
      )}

      <h4>{title}</h4>
      <div className={scss.box}>
        {type === "sale" && salePrice ? (
          <div className={scss.salebox}>
            <span className={scss.saleText}>${Math.floor(salePrice!)}</span>
            <span className={scss.price}>${price}</span>
          </div>
        ) : (
          <span className={scss.saleText}>${price}</span>
        )}
        <div className={scss.rating}>{renderStars(rating)}</div>
      </div>
      <button
        onClick={() => {
          handleAddCart();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
