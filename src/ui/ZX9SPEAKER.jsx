import { Link } from "react-router-dom";

function ZX9SPEAKER() {
  return (
    <div className="p-4">
      <div className="container bg-orange-400 px-4 py-8 rounded-lg flex justify-center items-center gap-14 flex-wrap flex-col-reverse md:flex-row">
        <div className="max-w-[350px]  ">
          <img
            src="/home/desktop/image-speaker-zx9.png"
            alt="image-speaker-zx9"
            className="w-full"
          />
        </div>
        <div className="text-white text-lg flex flex-col items-center text-center md:items-start md:text-start gap-6">
          <h2 className="text-4xl font-bold">
            <p>ZX9</p>
            <p>SPEAKER</p>
          </h2>
          <p>
            <p>Upgrade to premium speakers that are</p>
            <p>phenomenally built to deliver truly remarkable</p>
            sound.
          </p>
          <Link
            to="speakers/zx9-speaker"
            className="bg-black text-white py-4 px-8"
          >
            See Product
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default ZX9SPEAKER;
