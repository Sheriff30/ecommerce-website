/* eslint-disable react/prop-types */
import useCartStore from "../store/cartStore";

function Summary({ isLoading }) {
  const { cartItems } = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + item.total, 0);
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const shipping = 50;
  const grandTotal = shipping + total;

  return (
    <div className="bg-white p-10 rounded-md flex flex-col gap-5 ">
      {" "}
      <p className="uppercase text-2xl font-semibold ">summary</p>
      <div className="grid gap-5 max-h-[240px] overflow-y-auto custom-scrollbar pr-2">
        {cartItems.map((e) => (
          <div key={e.name} className="flex justify-between gap-2 items-center">
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
      <div className="text-lg flex justify-between">
        <p className="opacity-50 uppercase">SHIPPING</p>
        <p className="font-semibold">{intl.format(shipping)}</p>
      </div>
      <div className="text-lg flex justify-between">
        <p className="opacity-50 uppercase">GRAND TOTAL</p>
        <p className="font-semibold">{intl.format(grandTotal)}</p>
      </div>
      <button
        className="bg-orange-400 py-4 px-8 text-center text-white uppercase disabled:opacity-50"
        type="submit"
        disabled={isLoading}
      >
        Order
      </button>
    </div>
  );
}

export default Summary;
