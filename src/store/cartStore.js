import toast from "react-hot-toast";
import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  addItem: (item) =>
    set((state) => {
      toast.success(`${item.name} Added To Cart 🛒`);
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      let updatedCart;
      if (existingItemIndex !== -1) {
        updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].amount += item.amount;
        updatedCart[existingItemIndex].total += item.amount * item.price;
      } else {
        updatedCart = [...state.cartItems, item];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  removeItems: () => {
    toast.success("All products have been removed from the cart 🛒");
    localStorage.setItem("cartItems", JSON.stringify([]));
    set(() => ({ cartItems: [] }));
  },
}));

export default useCartStore;
