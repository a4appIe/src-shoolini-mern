import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { IoCreateSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { MdSecurityUpdateWarning } from "react-icons/md";
import axios from "axios";
import HERO_BG from "/bg-img.jpg";
import { AuthContext } from "../components/AuthContext";

const AdminDashboard = () => {
  const { isUserLoggedIn, data, logout, login } = useContext(AuthContext);
  const {token, id} = data;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      toast.error("Please login to continue");
      navigate("/admin");
    }
  }, []);

  const handleSignOut = () => {
    logout();
    navigate("/admin");
  };

  const handleUpdatePassword = async () => {
    if (oldPassword === "" || newPassword === "") {
      toast.error("Please fill all fields");
    } else {
      try {
        let res = await axios.patch(
          `http://localhost:5000/api/v1/admin/update/${id}`,
          {
            oldPassword,
            newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(res.data.message);
      } catch (error) {
        // toast.error(error);
        console.log(error)
      }
    }
  };

  return (
    <>
      {/* Modal ------------------------------------ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-semibold">Update visibility?</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium"
              >
                Old Password
              </label>
              <input
                id="oldPass"
                name="oldPass"
                type="text"
                placeholder="Enter old password"
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
              <label
                htmlFor="newPass"
                className="block text-gray-700 font-medium mt-4"
              >
                New Password
              </label>
              <input
                id="newPass"
                name="newPass"
                type="text"
                placeholder="Enter new password"
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400"
              >
                Cancel
              </button>
              <div>
                <button
                  onClick={() => {
                    handleUpdatePassword();
                    closeModal();
                  }}
                  className="ml-3 px-4 py-2 bg-darkRed text-white rounded-md shadow"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* // ------------------------------------------------------------- */}
      <div
        className="min-h-[91vh] grid place-items-center"
        style={{
          backgroundImage: `url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-fit grid place-items-center gap-5">
          <div className="flex gap-5">
            <Link to={"/add-event"}>
              <div className="outline h-40 w-40 max-sm:h-28 max-sm:w-28 flex flex-col items-center justify-center p-1 shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl hover:bg-darkRed hover:text-white transition duration-300">
                <IoCreateSharp className="text-5xl" />
                <h1 className="text-darkRed font-semibold max-sm:text-sm">
                  Create Event
                </h1>
              </div>
            </Link>
            <div
              className="outline h-40 w-40 max-sm:h-28 max-sm:w-28 flex flex-col items-center justify-center p-1 shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl cursor-pointer hover:bg-darkRed hover:text-white transition duration-300"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="text-5xl" />
              <h1 className="text-darkRed font-semibold max-sm:text-sm">
                Sign out
              </h1>
            </div>
          </div>
          <div className="flex gap-5">
            <div
              className="outline h-40 w-40 max-sm:h-28 max-sm:w-28 flex flex-col items-center justify-center p-1 shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl cursor-pointer hover:bg-darkRed hover:text-white transition duration-300"
              onClick={() => {
                openModal();
              }}
            >
              <MdSecurityUpdateWarning className="text-5xl" />
              <h1 className="text-darkRed font-semibold max-sm:text-sm text-center">
                Update <br /> password
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
