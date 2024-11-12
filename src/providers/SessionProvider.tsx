"use client";
import { useRefreshMutation } from "@/redux/api/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [refreshTokenMutation] = useRefreshMutation();
  const router = useRouter();
  console.log("hello Session");

  const checkAccessToken = async () => {
    const tokensString = localStorage.getItem("token");
    if (!tokensString) return;

    let tokens;
    try {
      tokens = JSON.parse(tokensString);
    } catch (error) {
      console.error("Ошибка парсинга токенов", error);
      return;
    }

    const { accessTokenExpiration, refreshToken } = tokens;
    if (accessTokenExpiration <= Date.now()) {
      console.log("Токен истек!");
      try {
        const { data } = await refreshTokenMutation(refreshToken);
        localStorage.removeItem("token");
        localStorage.setItem("token", JSON.stringify(data));
        window.location.reload();
      } catch (error) {
        console.error("Ошибка обновления токена", error);
        localStorage.removeItem("token");
      }
    } else {
      console.log("Токен живой!");
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, [pathname]);

  return <>{children}</>;
};

export default SessionProvider;
