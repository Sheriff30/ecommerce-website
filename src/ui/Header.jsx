import { Link } from "react-router-dom";
import CartContainer from "./CartContainer";

function Header() {
  return (
    <div className="p-4 bg-black border-b-2 border-b-gray-800 ">
      <div className="container  text-white flex items-center justify-between relative ">
        <Link to="/" className="font-bold text-2xl">
          audiophile
        </Link>

        <ul className=" items-center gap-4 text-lg hidden md:flex ">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>

        <CartContainer />
      </div>
    </div>
  );
}

export default Header;
