import { CiShoppingCart } from "react-icons/ci";
import Cart from "./Cart";
import { useState, useRef, useEffect } from "react";

function CartContainer() {
  const [showCart, setShowCart] = useState(false);
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
      <div ref={cartIconRef} onClick={handleCartDisplay}>
        <CiShoppingCart size={36} className="cursor-pointer" />
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
