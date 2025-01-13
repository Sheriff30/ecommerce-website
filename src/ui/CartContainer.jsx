import { CiShoppingCart } from "react-icons/ci";
import Cart from "./Cart";
import { useState, useRef, useEffect } from "react";
import useCartStore from "../store/cartStore";

function CartContainer() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCartStore();

  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  function handleCartDisplay() {
    setShowCart((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        cartRef.current &&
        cartIconRef.current &&
        !cartRef.current.contains(e.target) &&
        !cartIconRef.current.contains(e.target)
      ) {
        setShowCart(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div ref={cartIconRef} onClick={handleCartDisplay} className="relative">
        <CiShoppingCart size={36} className="cursor-pointer" />
        {cartItems.length ? (
          <span className="text-white absolute -top-1 -right-1 bg-black border-2 cursor-pointer rounded-[50%] h-6 w-6 text-center flex justify-center items-center ">
            <div>{cartItems.length}</div>
          </span>
        ) : null}
      </div>

      {showCart && (
        <div ref={cartRef} className="cart-dropdown">
          <Cart handleCartDisplay={handleCartDisplay} />
        </div>
      )}
    </div>
  );
}

export default CartContainer;
