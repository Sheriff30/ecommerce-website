import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-4 bg-black  ">
      <div className="container text-white  flex flex-col gap-10">
        <div className="flex items-center justify-between flex-wrap gap-4 ">
          <div className="font-bold text-2xl">audiophile</div>

          <ul className=" items-center gap-4 text-lg flex flex-wrap ">
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
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4 ">
          <p className="opacity-75">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team <br /> of music lovers and sound specialists who are
            devoted to helping you get the <br /> most out of personal audio.
            Come and visit our demo facility - we’re open 7 <br /> days a week.
          </p>

          <div className="flex gap-4  flex-wrap">
            <a href="#">
              <FaFacebookSquare size={36} />
            </a>
            <a href="#">
              <FaSquareXTwitter size={36} />
            </a>
            <a href="#">
              <FaInstagramSquare size={36} />
            </a>
          </div>
        </div>

        <p className="text-sm opacity-75">
          Made with ❤️ by <strong>Sherif Fouad</strong>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
