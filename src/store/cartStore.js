import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  //   Adding Items to cart
  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].amount += item.amount;
        updatedCart[existingItemIndex].total += item.amount * item.price;

        return { cartItems: updatedCart };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    }),

  // Removing all Items from cart

  removeItems: () => {
    set(() => ({ cartItems: [] }));
  },
}));

export default useCartStore;
