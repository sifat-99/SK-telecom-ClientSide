import { useContext } from "react";
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
        {user && (
          <div>
          <NavLink to={'/Cart'}><button className="flex items-center gap-2 btn normal-case text-white">
              <h1 className="text-sm md:text-2xl">Cart</h1>
              <FaShoppingCart className="text-sm md:text-2xl" />
            </button></NavLink>
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
              <div className="drawer-side mt-20 ">
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
