import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { SiHellofresh } from "react-icons/si";
function InfoSlideBar() {
  return (
    <div className="sticky top-5 flex flex-col gap-10">
      <div className="border-solid border-2 border-stone-900 p-3">
        <div>
          <h2 className="flex gap-10 text-[30px] font-semibold">
            Hi
            <SiHellofresh style={{ color: "red" }} size={30} />
          </h2>
        </div>
        <div className="mt-4">
          <p className="leading-9 tracking-normal text-[20px]">
            <span className="font-bold">i am a food blog </span>
            is an award winning food blog that’s been around since 2010
            featuring hundreds of easy, fun, and delicious modern Asian- and
            globally-inspired recipes that celebrate the joy of home cooking.
            Our tips and tricks will have you cooking like a pro in no time.
            Pull up a chair and stick around for awhile, let’s be friends and
            eat together!
          </p>
        </div>
      </div>

      <div className="border-solid border-2 border-stone-900 p-3">
        <div>
          <h2 className="text-[25px] text-center font-semibold">
            Dont forget like and subscibes
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-evenly cursor-pointer ">
          <AiOutlineInstagram size={30} style={{color:"orange"}}/>
          <AiOutlineYoutube size={30} style={{color:"red"}}/>
          <AiOutlineFacebook size={30} style={{color:"blue"}}/>
        </div>
      </div>
    </div>
  );
}

export default InfoSlideBar;
