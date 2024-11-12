"use client";
import { FC } from "react";
import scss from "./Update.module.scss";
import { useGetMeQuery } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/products";
import { useParams, useRouter } from "next/navigation";

const UpdateProduct: FC = () => {
  const { data } = useGetMeQuery();
  const { register, handleSubmit, reset } = useForm<ICreateProduct>();
  const { updateId } = useParams();
  const [updateProductMutation] = useUpdateProductMutation();
  const { data: ProductData } = useGetProductByIdQuery(Number(updateId));
  const router = useRouter();

  const onSubmit: SubmitHandler<ICreateProduct> = async (data) => {
    const newProductData: ICreateProduct = {
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image,
    };

    try {
      const res = await updateProductMutation({
        id: Number(updateId),
        data: newProductData,
      }).unwrap();
      console.log("Product updated successfully:", res);
      reset();
      router.push("/");
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Ошибка обновлении продукта");
    }
  };

  return (
    <section className={scss.CreateProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.createHeader}>
            <h2>
              <span>Update</span> Your Product!
            </h2>
            <p>{data?.profile.username}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={ProductData?.title}
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            <input
              defaultValue={ProductData?.price}
              type="text"
              placeholder="Price"
              {...register("price", { required: "Price is required" })}
            />
            <select
              defaultValue={ProductData?.category}
              {...register("category", { required: "Category is required" })}
            >
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <input
              defaultValue={ProductData?.description}
              type="text"
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            <input
              defaultValue={ProductData?.image}
              type="text"
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
            />
            <button type="submit">Save Product</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProduct;
