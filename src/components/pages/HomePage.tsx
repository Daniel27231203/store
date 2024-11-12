"use client";
import React from "react";
import Sale from "./HomeSections/Sale";
import { useGetMeQuery } from "@/redux/api/auth";
import Loading from "../modals/Loading/Loading";
import Hero from "./HomeSections/Hero";
import CategoriesSection from "./HomeSections/CategoriesSection";
import BestSelling from "./HomeSections/BestSelling";
import ProductsSection from "./HomeSections/ProductsSection";
import AuthPage from "./AuthPage";

const HomePage = () => {
  const { data, isLoading } = useGetMeQuery();
  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            backgroundColor: "white",
          }}
        >
          <Loading />
        </div>
      )}
      {data ? (
        <>
          <Hero />
          <Sale />
          <CategoriesSection />
          <BestSelling />
          <ProductsSection />
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default HomePage;
