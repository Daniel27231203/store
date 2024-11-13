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

interface ProductProps {
  photo: string;
  title: string;
  price: number;
  type: string;
  salePrice?: number;
  rating: number;
  id: number;
  user: User;
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
      <button onClick={() => router.push(`/cart`)}>Add to cart</button>
    </div>
  );
};

export default Product;
