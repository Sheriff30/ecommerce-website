import { Link } from "react-router-dom";

function ZX7SPEAKER() {
  return (
    <div className="p-4">
      <div className="container p-4 rounded-lg bg-zx7speakbg bg-cover h-[320px] bg-no-repeat bg-center text-black text-lg flex flex-col items-center lg:items-start lg:pl-40 gap-6 justify-center ">
        <h2 className="text-4xl font-bold">ZX7 SPEAKER</h2>
        <Link
          to="speakers/zx7-speaker"
          className="  py-4 px-8 border border-black"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default ZX7SPEAKER;
