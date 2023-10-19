import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Registration = () => {
  const [valid, setValid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { createUser, logOut } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.text.value;
    const image = e.target.image.value;
    if (password.length < 6) {
      setValid("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setValid("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setValid("Password must contain at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setValid("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setValid("Password must contain at least one special character");
      return;
    } else {
      setValid("");
    }
    setErrorMessage("");
      createUser(email, password, name, image)
      .then(() => {
        // console.log(res.user);
        swal({
          title: "Good job!",
          text: "Registration successful!",
          icon: "success",
          button: " Login Now!!!",
        }).then(function () {
          window.location = "/login";
          e.target.reset();
          // for force the new Registered user to login again after registration to access everything.
          logOut();
        });
      })
      .catch(() => {
        // console.log(err.message);
        setErrorMessage("Email already in use");
      });
    
    // console.log(email, password, image, name);
    
  };

  return (
    <div
      className=" min-h-screen flex flex-col justify-center items-center"
    //   style={{ backgroundImage: "url('/Bg.png')" }}
    //   data-aos="zoom-in-left"
    >
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-center">Registration now!!!</h1>
      </div>
      <div className=" w-full px-10 md:p-12 py-32  md:w-2/3 xl:w-1/3 rounded-3xl shadow-2xl mt-20 bg-base-100">
        <form onSubmit={handleLogin}>
          <div>
            <label className="label">
              <span className="label-text">Your Name: </span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              name="text"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
              name="image"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />

            <p className="text-red-600 font-semibold mt-3">{valid}</p>
            <p className="text-red-600 pl-4 text-sm">{errorMessage}</p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Registration</button>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-xl font-bold">Already have an account?</p>
            <NavLink to={"/login"}>
              <p className=" text-blue-600 text-2xl font-bold label-text-alt link link-hover">
                Login
              </p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
