import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import CheckoutInputs from "../ui/CheckoutInputs";
import Summary from "../ui/Summary";
import { useEffect } from "react";

function Checkout() {
  const { cartItems } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  if (cartItems.length === 0) {
    return null;
  }
  const total = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shipping = 50;
  const grandTotal = shipping + total;

  function submitOrder(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());
    const finalObject = {
      ...dataObject,
      order: cartItems.map((order) => {
        return { name: order.name, amount: order.amount };
      }),
      total: grandTotal,
    };

    console.log(finalObject);
  }

  return (
    <form className="py-20 px-4 bg-gray-100" onSubmit={submitOrder}>
      <div className="container grid grid-cols-[2fr_1fr] gap-5 ">
        <CheckoutInputs />
        <Summary />
      </div>
    </form>
  );
}

export default Checkout;
