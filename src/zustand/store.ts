import { create } from "zustand";

interface LocalData {
  basket: BasketProduct[];
  addToCart: (value: BasketProduct) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const useStore = create<LocalData>((set) => ({
  basket: JSON.parse(localStorage.getItem("basket") || "[]"), // Загружаем из localStorage

  addToCart: (value) =>
    set((state) => {
      const existingItem = state.basket.find((item) => item.id === value.id);

      let updatedBasket;
      if (existingItem) {
        // Если товар уже в корзине, увеличиваем его количество
        updatedBasket = state.basket.map((item) =>
          item.id === value.id
            ? { ...item, quantity: item.quantity + value.quantity }
            : item
        );
      } else {
        // Если товара нет в корзине, добавляем его
        updatedBasket = [...state.basket, value];
      }

      localStorage.setItem("basket", JSON.stringify(updatedBasket)); // Сохраняем в localStorage
      return { basket: updatedBasket }; // Обновляем состояние
    }),

  increase: (id) =>
    set((state) => {
      const updatedBasket = state.basket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    }),

  decrease: (id) =>
    set((state) => {
      const updatedBasket = state.basket
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Удаляем товары с количеством 0

      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    }),
}));

export default useStore;
