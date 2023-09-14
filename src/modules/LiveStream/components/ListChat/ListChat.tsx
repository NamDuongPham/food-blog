import { GrChannel } from "react-icons/gr";
import Channel from "./Channel";
import tv from "../../../../../public/images/tv.jpg";

import goose1 from "../../../../../public/images/goose1.webp";
import goose2 from "../../../../../public/images/goose2.jpg";
import goose3 from "../../../../../public/images/goose3.jpg";
interface Channel {
  profile: string;
  name: string;
}
function ListChat() {
  const channels: Channel[] = [
    { profile: tv, name: "DevLive" },
    { profile: goose1, name: "DevLive" },
    { profile: goose2, name: "DevLive" },
    { profile: goose3, name: "DevLive" },
    { profile: tv, name: "DevLive" },
    { profile: goose1, name: "DevLive" },
    { profile: goose2, name: "DevLive" },
    { profile: goose3, name: "DevLive" },
  ];
  return (
    <div className="sticky top-4 bg-[#efeff1]  p-2 border-r h-full z-20 ">
      {/* Title */}
      <div className="whitespace-nowrap flex justify-center">
        <p className="hidden lg:flex text-[12px] font-bold">
          RECOMMENDED CHANNELS
        </p>
        <div className="  lg:hidden">
          <GrChannel />
        </div>
      </div>
      {/* Recomended */}
      <div className="flex flex-col gap-2 pt-4">
        {channels.map((channel,index) => (
          <Channel key={index} profile={channel.profile} name={channel.name} />
        ))}
      </div>
    </div>
  );
}

export default ListChat;
