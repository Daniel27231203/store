"use client";
import { FC } from "react";
import scss from "./CreateProduct.module.scss";
import { useGetMeQuery } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProductMutation } from "@/redux/api/products";
import { useRouter } from "next/navigation";

const CreateProduct: FC = () => {
  const { data } = useGetMeQuery();
  const { register, handleSubmit, reset } = useForm<ICreateProduct>();
  const [createProductMutation] = useCreateProductMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<ICreateProduct> = async (data) => {
    const productData: any = {
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image,
    };

    try {
      const res = await createProductMutation(productData).unwrap();
      console.log("Product created successfully:", res);
      reset();
      router.push("/auth/profile");
    } catch (err) {
      console.error("Error creating product:", err);
      alert("Ошибка создания продукта");
    }
  };

  return (
    <section className={scss.CreateProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.createHeader}>
            <h2>
              <span>Create</span> Your Product!
            </h2>
            <p>{data?.profile.username}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: "Price is required" })}
            />
            <select
              {...register("category", { required: "Category is required" })}
            >
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            <input
              type="text"
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
