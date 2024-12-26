function AboutAudiophile() {
  return (
    <div className="py-20 px-4">
      <div className="container grid grid-cols-1 gap-14  md:grid-cols-2">
        <div className="text-black flex flex-col gap-6 justify-center  ">
          <h2 className="text-4xl font-bold uppercase">
            Bringing you the <span className="text-orange-400">best</span> audio
            gear
          </h2>
          <p className="text-sm opacity-75">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/public/shared/desktop/image-best-gear.jpg"
            alt="image-best-gear"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutAudiophile;
