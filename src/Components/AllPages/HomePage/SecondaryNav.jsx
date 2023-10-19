import { NavLink } from "react-router-dom";

const SecondaryNav = () => {
    return (
        <div className="flex flex-wrap gap-5  py-4 justify-center items-center  bg-base-100">
            <NavLink  to={"/laptop"}><button className="btn bg-white text-black">Laptop</button></NavLink>
            <NavLink to={'/mobile'}><button className="btn bg-white text-black">Mobile</button></NavLink>
            <NavLink to={'/accessories'}><button className="btn bg-white text-black">Accessories</button></NavLink>
            <NavLink to={'/desktop'}><button className="btn bg-white text-black">Desktop</button></NavLink>
            <NavLink to={'/tablet'}><button className="btn bg-white text-black">Tablet</button></NavLink>
        </div>
    );
};

export default SecondaryNav;