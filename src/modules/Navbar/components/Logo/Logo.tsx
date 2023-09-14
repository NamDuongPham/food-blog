import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../../../constants/site-map";

function Logo() {
  const navigate= useNavigate()
  const onHandleBack=()=>{
    navigate(SITE_MAP.HOME.url)
  }
  return (
    <img
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="200"
      width="200"
      src="../../../../../public/images/Picture1.png"
      onClick={()=>{onHandleBack()}}
      ></img>
  );
}

export default Logo;
