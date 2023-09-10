import { Rate } from "antd";
import { useGetPopularFoodsQuery } from "../../../../services/popularService";

function PopularRecipes() {
  const { data: popular } = useGetPopularFoodsQuery();
  let count = 1;
  return (
    <div className="mt-5 bg-[#fff5e6] ">
      <div className="container mx-auto lg:p-2">
        <h1 className="py-10 font-semibold">Most Popular Recipes This Week</h1>
        {popular &&
          popular.map((food, index) => {
            const recipeNumber = count++;
            return (
              <div
                key={index}
                className=" flex flex-row justify-between bg-white items-center my-4"
              >
                <div className="flex flex-row gap-5 items-center justify-start h-[250px] cursor-pointer">
                  <div className="h-full">
                    <img
                      src={food.image}
                      alt="hình"
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-around h-full">
                    <div>
                      <span className="bg-black text-white  p-2 font-semibold rounded-md">
                        {food.category}
                      </span>
                    </div>
                    <div>
                      <span className="text-[25px] font-bold">{food.name}</span>
                    </div>
                    <div>
                      <span className="text-[15px] font-bold">
                        Rating : {food.rating}{" "}
                        <Rate disabled={true} value={food.rating} />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="mr-4">{recipeNumber}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PopularRecipes;
