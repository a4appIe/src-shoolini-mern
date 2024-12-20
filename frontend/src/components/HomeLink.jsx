/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const HomeLink = ({ link, text, color, bgclr }) => {
  const navigate = useNavigate();
  function handleNavigate(){
    navigate(link);
  }
  return (
    <p className={`text-4xl font-bold text-${color} bg-${bgclr} p-10 flex-1 text-center cursor-pointer`} onClick={handleNavigate}>
      {text}
    </p>
  );
};

export default HomeLink;
