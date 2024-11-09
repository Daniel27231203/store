"use client";
import { FC, useState } from "react";
import scss from "./Forgot.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useResetMutation } from "@/redux/api/auth";

const Forgot: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const [resetMutation] = useResetMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log("🚀 ~ token:", token);

  const resetPassword = async () => {
    const userData: AUTH.RessetRequest = {
      token: String(token),
      newPassword: inputValue,
    };
    const { data } = await resetMutation(userData);
    console.log("🚀 ~ resetPassword ~ data:", data);

    if (data) {
      alert("Пароль успешно изменен!");
      router.push("/auth/sign-in");
    } else {
      alert("Токен недействителен или устарел!");
      router.push("/auth/addEmail");
    }
  };

  return (
    <section className={scss.Forgot}>
      <div className="container">
        <div className={scss.content}>
          <input
            minLength={6}
            type="password"
            placeholder="Измените пароль"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button
            onClick={() => {
              resetPassword();
              setInputValue("");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
