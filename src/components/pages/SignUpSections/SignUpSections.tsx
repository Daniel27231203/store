"use client";

import React, { FC } from "react";
import scss from "./SignUpSections.module.scss";
import { FcGoogle } from "react-icons/fc";

import img from "../../../assets/image/phone.png";
import Link from "next/link";
import { useSignUpMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignUpSections = () => {
  const [signUpMutation] = useSignUpMutation();
  const { register, handleSubmit, reset } = useForm<SingUpUser>();
  const router = useRouter();
  const onSubmit: SubmitHandler<SingUpUser> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      username: data.username,
      photo: data.photo,
    };

    try {
      const res = await signUpMutation(userData).unwrap();
      console.log("🚀 ~ constonSubmit:SubmitHandler<SingUpUser>= ~ res:", res);
      localStorage.setItem("token", JSON.stringify(res));
      router.push("/");
      reset();
    } catch (err) {
      console.error("ошибка в авторизации:", err);
      alert("Failed to sign in. Please check your credentials.");
    }
  };
  return (
    <div className={scss.SignUpSections}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.photo}>
            <img width={880} src={img.src} alt="" />
          </div>
          <div className={scss.SignUp}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <input
                type="text"
                placeholder="Photo"
                {...register("photo", { required: true })}
              />
              <input
                type="text"
                placeholder="Name"
                {...register("username", { required: true })}
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <button type="submit">Create Account</button>
            </form>
            <div className={scss.log}>
              <button className={scss.google}>
                <span>
                  <FcGoogle />
                </span>
                Sign up with Google
              </button>
              <Link href={"/auth/sign-in"}>
                Arleady have account? <span> Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSections;
