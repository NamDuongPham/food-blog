import { MdAddCircle, MdOutlineArticle } from "react-icons/md";
import { AiFillHome, AiFillVideoCamera } from "react-icons/ai";
import { BiSolidVideos, BiSolidPencil } from "react-icons/bi";
import { useState } from "react";

const listItems = [
  ["Home", <AiFillHome />],
  ["Blog", <MdOutlineArticle />],
  ["Video", <BiSolidVideos />],
  ["Class", <AiFillVideoCamera />],
];

export default function SlideBar() {
  const [onAddPost, setOnAddPost] = useState(false);
  const [circleRotation, setCircleRotation] = useState(0);

  return (
    <div className="h-[400px] sticky top-5">
      <div className="w-[80px] p-2  flex flex-col items-center gap-1 z-10 ">
        <div
          className={`flex items-center justify-center mt-2 mb-0.5 rounded-full cursor-pointer w-11 h-11  rotate-${circleRotation}`}
          onClick={() => {
            if (!onAddPost) setCircleRotation(45);
            else setCircleRotation(0);
            setOnAddPost(!onAddPost);
          }}
        >
          <MdAddCircle className="overflow-visible box-content text-5xl relative text-blue-700" />
        </div>
        {onAddPost && (
          <div className="absolute transform translate-x-20 translate-y-12 w-40 h-11 flex items-center bg-slate-300 p-2 rounded-2xl ">
            <a className="flex flex-row gap-2 text-black cursor-pointer">
              <span>
                <BiSolidPencil />
              </span>
              Viết blog
            </a>
          </div>
        )}
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <a
                href={`/${item[0].toString().toLowerCase()}`}
                className="flex flex-col items-center justify-center rounded-2xl cursor-pointer h-[72px] mt-1 text-black hover:bg-slate-300 cl:bg-slate-400 w-20"
              >
                {item[1]}
                <span>{item[0]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
