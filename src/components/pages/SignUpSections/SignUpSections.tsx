"use client";

import React, { FC, useState } from "react";
import scss from "./SignUpSections.module.scss";
import { FcGoogle } from "react-icons/fc";

import img from "../../../assets/image/phone.png";
import Link from "next/link";
import { useSignUpMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const SignUpSections = () => {
  const [signUpMutation] = useSignUpMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SingUpUser>();
  const [icon, setIcon] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<SingUpUser> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      username: data.username,
      photo: data.photo,
    };

    try {

      const { data } = await signUpMutation(userData);
      localStorage.setItem("token", JSON.stringify(data));

      router.push("/");
      reset();
    } catch (err) {
      console.error("Authorization error:", err);
      alert("Failed to sign in. Please check your credentials.");
    }
  };

  const togglePasswordVisibility = () => {
    setIcon(prev => !prev);
  };

  return (
    <div className={scss.SignUpSections}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.photo}>
            <img width={880} src={img.src} alt="phone" />
          </div>
          <div className={scss.SignUp}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo", { required: "Photo URL is required" })}
              />
              {errors.photo && <span>{errors.photo.message}</span>}
              
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <span>{errors.username.message}</span>}
              
              <input
                type="text"
                placeholder="Email or Phone Number"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
              
              <div className={scss.passwordField}>
                <input
                  type={icon ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                <span onClick={togglePasswordVisibility}>
                  {icon ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
              </div>
              {errors.password && <span>{errors.password.message}</span>}

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
                Already have an account? <span>Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSections;
