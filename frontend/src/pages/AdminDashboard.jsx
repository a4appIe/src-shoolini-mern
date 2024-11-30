import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { IoCreateSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  const { token } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { token: null };

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/admin");
  };

  return (
    <>
      <div className="min-h-[91vh] grid place-items-center">
        <div className="h-fit grid place-items-center gap-5">
          <div className="flex gap-5">
            <Link to={"/add-event"}>
              <div className="outline h-40 w-40 max-sm:h-28 max-sm:w-28 flex flex-col items-center justify-center p-1 shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
                <IoCreateSharp className="text-5xl" />
                <h1 className="text-darkRed font-semibold max-sm:text-sm">
                  Create Event
                </h1>
              </div>
            </Link>
            <div
              className="outline h-40 w-40 max-sm:h-28 max-sm:w-28 flex flex-col items-center justify-center p-1 shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl cursor-pointer"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="text-5xl" />
              <h1 className="text-darkRed font-semibold max-sm:text-sm">
                Sign out
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
