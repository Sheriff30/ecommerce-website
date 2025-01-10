import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
}));
export default useCartStore;
