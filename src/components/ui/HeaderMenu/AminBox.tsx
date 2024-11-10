import React from "react";
import scss from "./AdminBox.module.scss";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useLogOutMutation } from "@/redux/api/auth";

const AdminBox = () => {
  const [logoutMutation] = useLogOutMutation();
  const LogOut = async () => {
    await logoutMutation();
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className={scss.AdminBox}>
      <div className={scss.links}>
        <FaRegUser />

        <Link href={"/auth/profile"}>Manage My Accound</Link>
      </div>
      <div className={scss.links}>
        <PiBasket />

        <Link href={"/"}>My Orders</Link>
      </div>
      <div className={scss.links}>
        <AiOutlineCloseCircle />

        <Link href={"/"}>My Concollection</Link>
      </div>
      <div className={scss.links}>
        <CiStar />

        <Link href={"/"}>My Rewiews</Link>
      </div>
      <div className={scss.links}>
        <CiLogout />

        <button
          onClick={() => {
            LogOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminBox;
