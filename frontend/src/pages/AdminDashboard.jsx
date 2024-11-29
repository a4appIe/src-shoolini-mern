import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { token } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { token: null };

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token]);
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
