import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/admin/login`,
        userData
      );
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/admin/dashboard");
      return toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setUserData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[92vh] bg-[#F8F9FA]">
      <div className="card w-full max-w-max p-6 md:p-8 bg-darkRed shadow-[6px_6px_0px_0px_rgb(0,0,0)] text-center min-h-[350px] mx-2 lg:min-h-[400px] lg:min-w-[350px]">
        <h4 className="title text-xl md:text-2xl font-medium mb-4 text-[#f5f5f5]">
          Log In!
        </h4>
        <form
          onSubmit={(e) => {
            handleAuth(e);
          }}
        >
          {/* Email Field */}
          <div className="field flex items-center gap-2 bg-white px-3 py-2 mb-6">
            <svg
              className="input-icon w-5 h-5 fill-brown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" />
            </svg>
            <input
              id="username"
              placeholder="username"
              className="input-field w-full bg-transparent border-none outline-none text-sm md:text-base text-[#d3d3d3] placeholder-gray-400"
              name="username"
              type="text"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>

          {/* Password Field */}
          <div className="field flex items-center gap-2 bg-white px-3 py-2 mb-6">
            <svg
              className="input-icon w-5 h-5 fill-brown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input
              id="password"
              placeholder="Password"
              className="input-field w-full bg-transparent border-none outline-none text-sm md:text-base text-[#d3d3d3] placeholder-gray-400"
              name="password"
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full py-2 px-4 bg-brown text-white font-medium text-sm md:text-base uppercase shadow-md hover:bg-[#5e6681] hover:shadow-lg transition-all duration-300 mb-6"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <a
            href="#"
            className="btn-link block mt-3 text-xs md:text-sm text-[#f5f5f5] hover:text-[#ffeba7] transition-all duration-300"
          >
            Forgot your password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
