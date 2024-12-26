import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-4 bg-black  ">
      <div className="container text-white  flex flex-col gap-10">
        <div className="flex items-center justify-between flex-wrap gap-4 ">
          <div className="font-bold text-2xl">audiophile</div>

          <ul className=" items-center gap-4 text-lg flex flex-wrap ">
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
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
