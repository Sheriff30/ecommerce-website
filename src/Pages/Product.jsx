import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import ProductCards from "../ui/ProductCards";
import AboutAudiophile from "../ui/AboutAudiophile";
import useCartStore from "../store/cartStore";

function Product() {
  const { product } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleGoBack = () => {
    navigate(-1);
  };
  const [filterdData] = data.filter((item) => item.slug === product);

  function addToCart(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    addItem({
      name: filterdData.name,
      image: filterdData.image,
      amount: Number(formData.get("amount")),
      price: filterdData.price,
      total: filterdData.price * formData.get("amount"),
    });
  }

  return (
    <>
      <div className="py-10 px-4 text-lg text-gray-500">
        <div className="container">
          <Link onClick={handleGoBack}>Go Back</Link>
        </div>
      </div>

      <div className="pb-20 px-4 text-lg">
        <div className="container text-black text-lg flex items-center gap-14 justify-center flex-wrap">
          <div className="max-w-[400px]  ">
            <img src={filterdData.image.desktop} alt="" />
          </div>
          <div className="flex flex-col gap-6 items-center text-center md:text-start md:items-start ">
            {filterdData.new ? (
              <span className="text-sm  opacity-75 tracking-widest text-orange-400 ">
                NEW PRODUCT
              </span>
            ) : (
              ""
            )}

            <h1 className="text-4xl font-bold">{filterdData.name}</h1>

            <div className="opacity-75 max-w-[450px] ">
              <p>{filterdData.description}</p>
            </div>

            <div className="font-semibold">
              {intl.format(filterdData.price)}
            </div>

            <form
              className="flex gap-10 flex-wrap justify-center"
              onSubmit={addToCart}
            >
              <input
                type="number"
                className=" py-4 px-8 bg-gray-100 text-center max-w-40"
                defaultValue="1"
                name="amount"
                min={1}
              />
              <button
                to={filterdData.slug}
                className="bg-orange-400 py-4 px-8 text-white"
              >
                ADD TO CART
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4 text-lg">
        <div className="container text-black text-lg flex  gap-14 justify-start lg:justify-center  flex-wrap">
          <div className="max-w-[800px]">
            <p className="text-xl font-bold mb-3">FEATURES</p>
            <p>{filterdData.features}</p>
          </div>
          <div>
            <p className="text-xl font-bold mb-3 uppercase">in the box</p>
            <div className="grip gap-3">
              {filterdData.includes.map((e) => (
                <p key={e.item} className="flex gap-2">
                  <span className="text-orange-400 font-semibold">
                    {e.quantity}x
                  </span>
                  <span className="opacity-50"> {e.item} </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4 text-lg">
        <div className="container text-black text-lg">
          <h3 className="uppercase text-2xl font-bold text-center mb-10">
            you may also like
          </h3>
          <div className="flex gap-10 justify-center flex-wrap ">
            {filterdData.others.map((e) => (
              <div key={e.slug} className="max-w-[300px] flex flex-col gap-5">
                <img src={e.image.desktop} alt={e.name} />

                <p className="font-semibold text-center">{e.name}</p>

                <Link
                  to={`/${filterdData.category}/${e.slug}`}
                  className="bg-orange-400 py-4 px-8 text-white mx-auto uppercase"
                >
                  See Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductCards />
      <AboutAudiophile />
    </>
  );
}

export default Product;
