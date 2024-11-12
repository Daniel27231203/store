"use client";
import React from "react";
import scss from "./ProfilePage.module.scss";
import { useGetMeQuery, useGetProfileMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const ProfilePage = () => {
  const [profileMutation] = useGetProfileMutation();
  const { data } = useGetMeQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProfile>();

  const onSubmit: SubmitHandler<IProfile> = async (data) => {
    const userData = {
      username: data.username,
      photo: data.photo,
    };

    try {
      const res = await profileMutation(userData).unwrap();
      alert(res);
      reset();
    } catch (err) {
      console.error("Error in profile update:", err);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className={scss.ProfilePage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.my}>
            <div className={scss.home}>
              <h1>Home /</h1>
              <h1>My Account</h1>
            </div>
            <div>
              <h1>
                Welcome! <span>{data?.profile.username}</span>
              </h1>
            </div>
          </div>
          <div className={scss.me}>
            <img src={data?.profile.photo} alt="" />

            <p>{data?.profile.username}</p>

            <div></div>
          </div>
          <div className={scss.profile}>
            <div className={scss.text}>
              <h1>Manage My Account</h1>
              <Link href={"/auth/profiel"}>My Profile</Link>
              <Link href={"/"}>Address book</Link>
              <Link href={"/"}>My Payment Options</Link>
              <h1>My Orders</h1>
              <Link href={"/"}>My Returns</Link>
              <Link href={"/create"}>Create Products</Link>
              <h1>My Wishlist</h1>
            </div>
            <div className={scss.book}>
              <h1>Edit Your Profile</h1>
              <form onSubmit={handleSubmit(onSubmit)} className={scss.in}>
                <div className={scss.inputs}>
                  <h2>First Name</h2>
                  <input
                    type="text"
                    placeholder="add to username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && (
                    <span className={scss.error}>
                      {errors.username.message}
                    </span>
                  )}
                </div>
                <div className={scss.inputs}>
                  <h2>Your Profile Image</h2>
                  <input
                    type="text"
                    placeholder="Your image"
                    {...register("photo", {
                      required: "Photo URL is required",
                    })}
                  />
                  {errors.photo && (
                    <span className={scss.error}>{errors.photo.message}</span>
                  )}
                </div>
                <div className={scss.btn}>
                  <button
                    onClick={() => {
                      reset();
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
