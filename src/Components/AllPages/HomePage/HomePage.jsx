import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import ExtraSection from "../../ExtraSections/ExtraSection";
// import SecondaryNav from "./SecondaryNav";

const HomePage = () => {
  const Brands = useLoaderData();
  // console.log(Brands);

  return (
    <div>
      {/* <SecondaryNav></SecondaryNav> */}
      <Banner></Banner>

      <div className="mt-8 lg:mt-0">
        <h2 className="text-6xl font-bold text-center">Our Trusted Brands</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-24 px-auto w-11/12 mx-auto">
        {Brands.map((brand, index) => (
          <Link to={`/${brand.id}`} key={index}>
            <div className="flex flex-col justify-center items-center  w-full">
              <img
                src={brand.brandImage}
                alt={brand.brandName}
                className="w-[300px] h-[300px] bg-white rounded-xl"
              />
              <button className="text-2xl btn bg-white text-black font-bold border mt-1">
                {brand.brandName}
              </button>
            </div>
          </Link>
        ))}
      </div>
      <ExtraSection></ExtraSection>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
