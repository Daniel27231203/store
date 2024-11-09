"use client";
import { FC } from "react";
import scss from "./AddEmail.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useForgotMutation } from "@/redux/api/auth";

const AddEmail: FC = () => {
  const { register, handleSubmit, reset } = useForm<ForgotPasswordResponse>();
  const [forgotMutation] = useForgotMutation();

  const onSubmit: SubmitHandler<ForgotPasswordResponse> = async (data) => {
    const userData = {
      email: data.email,
      frontEndUrl: window.location.href,
    };
    const res = await forgotMutation(userData);
    reset();
    if (res.data) {
      return alert(
        "ваш email действителен, мы отправим ссылку на вашу почту. Подвердите отправку!"
      );
    } else {
      return alert(
        "зивените но ваш email недействителен. Пожалуйста введите коректный email"
      );
    }
  };
  return (
    <section className={scss.AddEmail}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <input
              type="text"
              placeholder="add email"
              {...register("email", { required: true })}
            />
            <button type="submit">tab</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEmail;
