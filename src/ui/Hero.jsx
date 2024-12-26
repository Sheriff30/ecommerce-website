function Hero() {
  return (
    <div className="bg-black py-20 px-4">
      <div className="container text-white text-lg flex items-center gap-14 justify-center flex-wrap">
        <div className="flex flex-col gap-6 items-center text-center md:text-start md:items-start ">
          <span className="text-sm  opacity-75 tracking-widest  ">
            NEW PRODUCT
          </span>

          <h1 className="text-4xl font-bold">XX99 Mark II Headphones</h1>

          <div className="opacity-75">
            <p>Experience natural, lifelike audio and exceptional</p>
            <p>build quality made for the passionate music</p>
            enthusiast.
          </div>

          <a href="#" className="bg-orange-400 py-4 px-8">
            See Product
          </a>
        </div>

        <div className="max-w-[400px]  ">
          <img src="/public/home/desktop/bg-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
