import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import CheckoutInputs from "../ui/CheckoutInputs";
import Summary from "../ui/Summary";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import insertOrder from "../services/insertOrder";
import toast from "react-hot-toast";

function Checkout() {
  const { cartItems, removeItems } = useCartStore();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: insertOrder,
    onSuccess: () => {
      removeItems();
      toast.success("Order submitted successfully! 🎉");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again. ❌");
    },
  });
  const handleSubmit = (orderData) => {
    mutate(orderData);
  };

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
    handleSubmit(finalObject);
  }

  return (
    <form className="py-20 px-4 bg-gray-100" onSubmit={submitOrder}>
      <div className="container grid grid-cols-[2fr_1fr] gap-5 ">
        <CheckoutInputs />
        <Summary isLoading={isPending} />
      </div>
    </form>
  );
}

export default Checkout;
