import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 bg-black  ">
      <div className="container  text-white flex items-center justify-between ">
        <Link to="/" className="font-bold text-2xl">
          audiophile
        </Link>

        <ul className=" items-center gap-4 text-lg hidden md:flex ">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">HEADPHONES</a>
          </li>
          <li>
            <a href="#">SPEAKERS</a>
          </li>
          <li>
            <a href="#">EARPHONES</a>
          </li>
        </ul>

        <CiShoppingCart size={36} />
      </div>
    </div>
  );
}

export default Header;
