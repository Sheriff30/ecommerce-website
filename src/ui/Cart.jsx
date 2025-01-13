/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Cart({ handleCartDisplay }) {
  const { removeItems } = useCartStore();

  const { cartItems } = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + item.total, 0);
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="max-w-[370px] w-full z-10 bg-white absolute right-0 text-black top-[200%] shadow-smoothBlack p-5 rounded-md ">
      {cartItems.length ? (
        <div className="grid gap-5">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Cart ( {cartItems.length} )</p>
            <button className="text-gray-400 underline" onClick={removeItems}>
              Remove All
            </button>
          </div>

          <div className="grid gap-5 max-h-[240px] overflow-y-auto custom-scrollbar pr-2">
            {cartItems.map((e) => (
              <div
                key={e.name}
                className="flex justify-between gap-2 items-center"
              >
                <div className="flex gap-3">
                  <img
                    src={e.image.desktop}
                    alt={e.name}
                    className="max-w-[64px]"
                  />
                  <div>
                    <div className="font-bold">{e.name}</div>
                    <div className="opacity-50">{intl.format(e.price)}</div>
                  </div>
                </div>
                <div>{e.amount}x</div>
              </div>
            ))}
          </div>

          <div className="text-lg flex justify-between">
            <p className="opacity-50 uppercase">total</p>
            <p className="font-semibold">{intl.format(total)}</p>
          </div>

          <Link
            to="/checkout"
            onClick={handleCartDisplay}
            className="bg-orange-400 py-4 px-8 text-center text-white uppercase"
          >
            checkout
          </Link>
        </div>
      ) : (
        <div className="text-center font-semibold ">
          Your cart is empty! Start adding items to fill it up.
        </div>
      )}
    </div>
  );
}

export default Cart;
