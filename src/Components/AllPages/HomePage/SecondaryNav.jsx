import { NavLink } from "react-router-dom";

const SecondaryNav = () => {
  return (
    <div className="flex flex-wrap gap-5  py-4 justify-center items-center  bg-base-100">
      <NavLink to={"/laptop"}>
        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white">
          Laptop
        </button>
      </NavLink>
      <NavLink to={"/mobile"}>
        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white">
          Mobile
        </button>
      </NavLink>
      <NavLink to={"/accessories"}>
        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white">
          Accessories
        </button>
      </NavLink>
      <NavLink to={"/desktop"}>
        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white">
          Desktop
        </button>
      </NavLink>
      <NavLink to={"/tablet"}>
        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white">
          Tablet
        </button>
      </NavLink>
    </div>
  );
};

export default SecondaryNav;
