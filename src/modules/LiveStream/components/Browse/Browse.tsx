import mukbang from "../../../../../public/images/mukbang.png";
import cookbook from "../../../../../public/images/cookbook.png";
import workshop from "../../../../../public/images/workshop.png";

import CategoryLive from "../CategoryLive/CategoryLive";
interface CategoryLive {
  categoryTitle: string;
  icon: string;
  css: string;
}
function Browse() {
  const categories: CategoryLive[] = [
    {
      categoryTitle: "Mukbang",
      icon: mukbang,
      css: "w-[4.2rem] h-[4.2rem] -top-[0.3rem] right-0 -rotate-45 ",
    },
    {
      categoryTitle: "CookBook",
      icon: cookbook,
      css: "w-[4rem] h-[2.2rem] top-[0rem] right-0  ",
    },
    {
      categoryTitle: "Workshop",
      icon: workshop,
      css: "w-[8rem] h-[3.8rem] -top-[0.7rem] left-[135px]  ",
    }
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
