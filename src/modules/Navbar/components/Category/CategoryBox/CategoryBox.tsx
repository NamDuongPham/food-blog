// import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface ICategoryProps {
  label: string;
  selected?: boolean;
}

function CategoryBox(props: ICategoryProps) {
  const { selected, label } = props;
  const { category: currentCategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickHandler = () => {
    const updatedCategory: string | undefined =
      currentCategory === label.toLowerCase() ? undefined : label;

    const searchParams = new URLSearchParams(location.search);
    if (updatedCategory !== undefined) {
      searchParams.set("category", updatedCategory);
    } else {
      searchParams.delete("category");
    }

    // setSelectd(true);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  return (
    <>
      <div
        onClick={handleClickHandler}
        className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      hover:text-neutral-800
      transition
      cursor-pointer
      
      ${selected ? "text-[#de3151]" : "text-neutral-500"}
      
    `}
      >
        <div className="font-medium text-sm text-black hover:text-rose-500">{label}</div>
      </div>
    </>
  );
}

export default CategoryBox;
