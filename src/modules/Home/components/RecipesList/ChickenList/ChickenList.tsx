import { Rate } from "antd";
import { useGetTypeFoodByCategoryQuery } from "../../../../../services/typeFoodService";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function ChickenList() {
  const {
    data: chickenRecipes,
    error,
    isLoading,
  } = useGetTypeFoodByCategoryQuery("CHICKEN");

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const truncateIntro = (intro: string, wordCount: number) => {
    const words = intro.split(" ");
    if (words.length > wordCount) {
      const truncatedWords = words.slice(0, wordCount);
      return `${truncatedWords.join(" ")}...`;
    }
    return intro;
  };
  return (
    <div className="mx-auto px-2">
      <div>
        <h1 className="text-black font-semibold">Our Best Chicken Recipes</h1>
      </div>
      <div className="flex flex-row gap-3 justify-between">
        {chickenRecipes &&
          chickenRecipes.map((recipe, index) => (
            <Link to={`/detail/recipe/${recipe.id}`} key={recipe.id}>
              <div
                key={index}
                className="flex flex-row items-center w-[300px] my-5"
              >
                <div className="flex flex-col items-start justify-between bg-white hover:bg-orange-200 p-3">
                  <div>
                    <img src={recipe.image} alt="" />
                  </div>
                  <div>
                    <div className="bg-black text-white font-semibold w-[140px] p-1">
                      {/*  @ts-ignore*/}
                      <span>{recipe.topic[0]}</span>
                    </div>
                    <div className="mt-2 font-bold text-lg">
                      <h2>{recipe.name}</h2>
                    </div>
                    <div className="font-semibold text-sm">
                      rating:{recipe.rating}{" "}
                      <Rate disabled={true} value={recipe.rating}></Rate>
                    </div>
                    <div className="  text-justify">
                      <p>{truncateIntro(recipe.intro, 5)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChickenList;
