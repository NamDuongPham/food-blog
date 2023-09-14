import stick from "../../../../../public/images/stick.png";
import mic from "../../../../../public/images/mic.png";
import headphones from "../../../../../public/images/headphones.png";
import trophy from "../../../../../public/images/trophy.png";
import palette from "../../../../../public/images/palette.png";
import CategoryLive from "../CategoryLive/CategoryLive";
interface CategoryLive {
  categoryTitle: string;
  icon: string;
  css: string;
}
function Browse() {
  const categories: CategoryLive[] = [
    {
      categoryTitle: "Lives",
      icon: stick,
      css: "w-[4.2rem] h-[4.2rem] -top-[0.3rem] right-0 -rotate-45 ",
    },
    {
      categoryTitle: "Sings",
      icon: mic,
      css: "w-[2.2rem] h-[2.2rem] -top-[1rem] right-4  ",
    },
    {
      categoryTitle: "Remix",
      icon: headphones,
      css: "w-[3.8rem] h-[3.8rem] -top-[0.7rem] right-5 -rotate-45 ",
    },
    {
      categoryTitle: "Esports",
      icon: trophy,
      css: "w-[1.8rem] h-[1.8rem] -top-[0.7rem] right-6 ",
    },
    {
      categoryTitle: "Arts",
      icon: palette,
      css: "w-[4.2rem] h-[4.2rem] -top-[0.3rem] right-0 -rotate-[8 0deg] ",
    },
  ];
  return (
    <div>
      {/* Title */}
      <h1 className="text-[55px] font-bold">Explore</h1>
      {/* Categories */}
      <div className="flex flex-wrap gap-x-9  lg:gap-x-12 gap-y-6">
        {categories.map((category,index) => (
          <CategoryLive
          key={index}
            categoryTitle={category.categoryTitle}
            icon={category.icon}
            css={category.css}
          />
        ))}
      </div>
    </div>
  );
}

export default Browse;
