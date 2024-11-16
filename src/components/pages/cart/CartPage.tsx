"use client";
import { FC } from "react";
import scss from "./CartPage.module.scss";
import useStore from "@/zustand/store";
import { GoPlus } from "react-icons/go";
import { PiMinus } from "react-icons/pi";
import { describe } from "node:test";

const CartPage: FC = () => {
  const { basket, increase, decrease } = useStore();
  const totalPrice = basket.reduce((total, item) => {
    const itemPrice = item.salePrice || item.price;
    return total + itemPrice * item.quantity;
  }, 0);
  return (
    <section className={scss.CartPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.CartTitle}>
            <p>
              Home / <span>Cart</span>
            </p>
          </div>
          <div className={scss.CartTable}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item) => (
                  <tr key={item.id}>
                    <td className={scss.td}>
                      <img src={item.photo} alt="" />
                      {item.title}
                    </td>
                    <td>
                      $
                      {item.salePrice
                        ? item.salePrice * item.quantity
                        : item.price * item.quantity}
                    </td>
                    <td>
                      <div className={scss.quantity}>
                        <button onClick={() => increase(item.id)}>
                          <GoPlus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => {
                            if (item.quantity > 1) decrease(item.id);
                          }}
                        >
                          <PiMinus />
                        </button>
                      </div>
                    </td>
                    <td>${item.quantity * item.price || item.salePrice}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} style={{ textAlign: "right" }}>
                    <strong>Total:</strong>
                  </td>
                  <td colSpan={2}>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className={scss.btnBlock}>
              <button>Return To Shop</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
