import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import ProductCards from "../ui/ProductCards";
import AboutAudiophile from "../ui/AboutAudiophile";

function Category() {
  const { category } = useParams();
  const filteredData = data.filter((item) => item.category === category);

  if (filteredData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <p className="text-3xl font-bold">Page Not Found :( </p>
      </div>
    );
  }

  return (
    <>
      <div className=" text-white bg-black text-2xl text-center py-10 px-4 flex items-center justify-center uppercase">
        <p>{category}</p>
      </div>
      {filteredData.map((item, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div className="py-20 px-4" key={item.id}>
            <div
              className={`container text-black text-lg flex items-center gap-14 justify-center flex-wrap ${
                isReversed ? "flex-row-reverse" : ""
              }`}
            >
              {" "}
              <div className="flex flex-col gap-6 items-center text-center md:text-start md:items-start ">
                {item.new ? (
                  <span className="text-sm  opacity-75 tracking-widest text-orange-400 ">
                    NEW PRODUCT
                  </span>
                ) : (
                  ""
                )}

                <h1 className="text-4xl font-bold">{item.name}</h1>

                <div className="opacity-75 max-w-[450px] ">
                  <p>{item.description}</p>
                </div>

                <Link
                  to={item.slug}
                  className="bg-orange-400 py-4 px-8 text-white"
                >
                  See Product
                </Link>
              </div>
              <div className="max-w-[400px]  ">
                <img src={item.image.desktop} alt="" />
              </div>
            </div>
          </div>
        );
      })}
      <ProductCards />
      <AboutAudiophile />
    </>
  );
}

export default Category;
