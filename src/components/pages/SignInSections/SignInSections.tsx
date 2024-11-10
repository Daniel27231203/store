"use client";

import React, { useState } from "react";
import scss from "./SignInSections.module.scss";

import img from "../../../assets/image/phone.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSignInMutation } from "@/redux/api/auth";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
interface Value {
  email: string;
  password: string;
}

const SignInSections = () => {
  const [signInMutation] = useSignInMutation();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Value>();
  const [icon, setIcon] = useState(false);
  const onSubmit: SubmitHandler<Value> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    try {
      const { data: infa } = await signInMutation(userData);
      localStorage.setItem("token", JSON.stringify(infa));
      router.push("/auth/profile");
      window.location.reload();
      reset();
    } catch (err) {
      console.error("Ошибка авторизации:", err);
      alert("Неправильный логин или пароль");
    }
  };

  const togglePasswordVisibility = () => {
    setIcon(prev => !prev);
  };
  return (
    <div className={scss.SignInSections}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.photo}>
            <img width={880} src={img.src} alt="Phone" />
          </div>
          <div className={scss.SignUp}>
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Email or Phone Number"
                {...register("email", { required: true })}
              />
              <input
                type={icon?"text":"password"} 
                placeholder="Password"
                {...register("password", { required: true })}
              />
                 <span onClick={togglePasswordVisibility}>
                  {icon ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
              <div className={scss.log}>
                <button type="submit">Log in</button>
                <button
                  type="button" 
                  onClick={() => router.push("/auth/addEmail")}
                >
                  Forget Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSections;
