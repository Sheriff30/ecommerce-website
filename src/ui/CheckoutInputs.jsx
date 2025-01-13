function CheckoutInputs() {
  return (
    <div className="bg-white p-10 rounded-md grid gap-10">
      <p className="uppercase text-2xl font-semibold ">checkout</p>

      {/*Billing Details */}
      <div className="grid gap-4">
        <p className="text-orange-400 uppercase font-semibold">
          Billing Details
        </p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="alexei@mail.com"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 202-555-0136"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
        </div>
      </div>

      {/*Shipping Info */}
      <div className="grid gap-4">
        <p className="text-orange-400 uppercase font-semibold">
          shipping info{" "}
        </p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <input
              required
              type="text"
              id="address"
              name="address"
              placeholder="1137 Williams Avenue"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="zipcode" className="font-semibold">
              ZIP Code{" "}
            </label>
            <input
              required
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="10001"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="city" className="font-semibold">
              City
            </label>
            <input
              required
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <input
              required
              type="text"
              id="country"
              name="country"
              placeholder="United States"
              className="p-4 border border-gray-200 rounded-md "
            />
          </div>
        </div>
      </div>
      {/*Shipping Info */}
      <div className="grid gap-4">
        <p className="text-orange-400 uppercase font-semibold">
          payment details
        </p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="payment" className="font-semibold">
              Payment Method
            </label>
            <select
              name="payment"
              id="payment"
              className="p-4 border border-gray-200 rounded-md "
            >
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutInputs;
