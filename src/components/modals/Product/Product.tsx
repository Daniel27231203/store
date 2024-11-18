"use client";
import { FC, useCallback, useState } from "react";
import scss from "./Product.module.scss";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useGetMeQuery } from "@/redux/api/auth";
import { useDeleteProductMutation } from "@/redux/api/products";
import useStore from "@/zustand/store";

interface ProductProps {
  photo: string;
  title: string;
  price: number;
  type: string;
  salePrice?: number;
  rating: number;
  id: number;
  user: { id: number };
}

interface BasketProduct {
  id: number;
  title: string;
  price: number;
  salePrice?: number;
  photo: string;
  quantity: number;
}

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
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await deleteProductMutation(id).unwrap();
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Failed to delete the product:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = useCallback(
    (rating: number) => (
      <>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            style={{ color: index < rating ? "yellow" : "gray" }}
          />
        ))}
      </>
    ),
    []
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

  if (!data || !data.profile) return null;

  return (
    <div className={scss.product}>
      {photo ? (
        <div className={scss.imageBg}>
          <img src={photo} alt={title} />
          <div className={scss.blockIcon}>
            <button aria-label="Add to favorites">
              <FaRegHeart />
            </button>
            {+data.profile.id === +user.id && (
              <>
                <button
                  onClick={() => router.push(`/create/${id}`)}
                  aria-label="Edit product"
                >
                  <IoPencil />
                </button>
                <button
                  onClick={handleDelete}
                  aria-label="Delete product"
                  disabled={loading}
                >
                  <MdOutlineDelete />
                </button>
              </>
            )}
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
            <span className={scss.saleText}>${Math.floor(salePrice)}</span>
            <span className={scss.price}>${price}</span>
          </div>
        ) : (
          <span className={scss.saleText}>${price}</span>
        )}
        <div className={scss.rating}>{renderStars(rating)}</div>
      </div>
      <button onClick={handleAddCart} aria-label="Add to cart">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
