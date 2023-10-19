const Banner = () => {
  return (
    <div className="w-full mx-auto relative mt-20">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="/Slider1.jpg"
            className="w-full  h-3/4"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/Slider2.jpg"
            className="w-full h-3/4"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/Slider3.jpg"
            className="w-full  h-3/4"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute -bottom-3 md:bottom-8 2xl:bottom-20">
        <a href="#item1" className="btn btn-xl">
          1
        </a>
        <a href="#item2" className="btn btn-xl">
          2
        </a>
        <a href="#item3" className="btn btn-xl">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
