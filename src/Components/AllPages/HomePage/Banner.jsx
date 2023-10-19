const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
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
            className="w-full  h-3/4"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/Slider3.jpg"
            className="w-full  h-3/4"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 -mt-48">
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
