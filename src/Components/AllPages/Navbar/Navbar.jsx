import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName)
  const handleLogout = () => {
    logOut()
      .then(() => {
        swal("Congratulation!", "You have successfully Logged out!", "success");
      })
      .catch((err) => {
        swal("Oops!", `You can not Logged out!${err.message}`, "error");
      });
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  },[theme])
const handleToggle = () => {
  if(theme === "light"){
    setTheme("dark");
  }else{
    setTheme("light");
  }
}

  const NavBarItems = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-2xl"
              : "text-2xl"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-2xl"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-2xl"
              : "text-2xl"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addData"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-2xl"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-2xl"
              : "text-2xl"
          }
        >
          Add Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-orange-100 text-black font-bold sticky inset-0 z-10 ">
      <div className="navbar-start">
        <div className="flex flex-row-reverse items-center">
          <Link to={"/"}>
            <img className="w-3/5  md:w-2/5" src="/S.K.png" alt="" />
          </Link>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side mt-24 w-[178px] rounded-xl md:mt-24">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 gap-4 w-full min-h-full bg-base-200 text-base-content">
                {NavBarItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center gap-4 px-1">
          {NavBarItems}
          {user ? (
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-2xl"
                    : isActive
                    ? "bg-[#FF444A] underline text-white font-bold text-2xl"
                    : " text-2xl"
                }
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <NavLink to={"/register"}>
              <button className="btn text-2xl font-bold btn-ghost">
                Register
              </button>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="btn text-red-600">
          <label className="swap swap-rotate">
            <input type="checkbox"  onChange={handleToggle}/>
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {user && (
          <div>
            <NavLink to={"/Cart"}>
              <button className="flex items-center gap-2 btn normal-case bg-black text-white">
                <h1 className="text-sm text-white md:text-2xl">Cart</h1>
                <FaShoppingCart className="text-sm md:text-2xl" />
              </button>
            </NavLink>
          </div>
        )}
        {user ? (
          <div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-circle btn-lg"
                >
                  <img className="rounded-full" src={user?.photoURL} alt="" />
                </label>
              </div>
              <div className="drawer-side mx-auto mt-20 ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-auto min-h-full bg-base-200 text-base-content">
                  <li>{user?.displayName}</li>
                  <li className="mt-8">
                    <Link to={"/profile"}>
                      <button>Profile</button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/dashboard"}>
                      <button>Dashboard</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Sign Out</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-secondary normal-case">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
