import { Rate } from "antd";

function PopularRecipes() {
  return (
    <div className="mt-5 bg-[#fff5e6] ">
      <div className="container mx-auto lg:p-2">
        <h1 className="py-10 font-semibold">Most Popular Recipes This Week</h1>
        <div className=" flex flex-row justify-between bg-white items-center">
          <div className="flex flex-row gap-5 items-center justify-start h-[250px] cursor-pointer">
            <div className="h-full">
              <img
                src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w-600x400.jpg"
                alt=""
                className="object-cover h-full"
              />
            </div>
            <div className="flex flex-col items-start justify-around h-full">
              <div>
                <span className="bg-black text-white  p-2 font-semibold rounded-md">Easy</span>
              </div>
              <div>
                <span className="text-[25px] font-bold">Biria Tacos Recipe</span>
              </div>
              <div>
                <span className="text-[15px] font-bold">
                  Rating : 4.69 <Rate allowHalf defaultValue={2.5} />
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mr-4">1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularRecipes;
