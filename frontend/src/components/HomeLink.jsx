import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeLink = ({ link, text, color, bgclr }) => {
  const navigate = useNavigate();
  function handleNavigate(){
    navigate(link);
  }
  return (
    <p className={`text-4xl font-bold text-${color} bg-${bgclr} p-10 flex-1 text-center`} onClick={handleNavigate}>
      {text}
    </p>
  );
};

export default HomeLink;
