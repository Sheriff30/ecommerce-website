/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";

function ProductCard({ link, category, img }) {
  return (
    <a
      href={link}
      className="flex flex-col items-center gap-2 bg-gray-100 py-4 px-8 rounded-lg"
    >
      <img src={img} alt={category} className="max-w-[200px]  " />
      <div className="text-lg font-bold uppercase">{category}</div>
      <div className="flex items-center gap-1 uppercase">
        <span>Shop</span>
        <IoIosArrowForward />{" "}
      </div>
    </a>
  );
}

export default ProductCard;
