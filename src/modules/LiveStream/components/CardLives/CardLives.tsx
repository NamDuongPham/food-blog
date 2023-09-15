
import mukbangimg from "../../../../../public/images/mukbangimg.jpg";
import classKid from "../../../../../public/images/classKid.webp";
import cookLive from "../../../../../public/images/cookLive.jpg";
import CardChildren from "./CardChildren";
function CardLives() {
    const cards = [
        { title: "Mukbang streamer live", image: mukbangimg },
        { title: "Cooking for kid", image: classKid },
        { title: "Let's Talk", image: cookLive },
        
      
      ];
    return (
        <div>
      {/* Title */}
      <div className="w-full font-bold text-[20px] flex items-center pt-12 gap-x-6  ">
        <p className="">Topics</p>
        <p>Creators</p>
      </div>
      {/* Filter */}
      <div className="flex items-center pt-2">
        <p className="font-bold ">Search by category</p>
        <input
          type="search"
          className="ml-4 outline-0 bg-[#e6e6e6] p-1.5 rounded-full  pl-4"
          placeholder="Search by category"
        />
      </div>
      {/* Cards */}
      <div className="flex flex-wrap gap-10">
        {cards.map((card,index) => (
          <CardChildren key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
    );
}

export default CardLives;