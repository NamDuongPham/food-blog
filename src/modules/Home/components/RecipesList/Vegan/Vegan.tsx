import { Rate } from "antd";
import { useGetTypeFoodByCategoryQuery } from "../../../../../services/typeFoodService";
import { useEffect } from "react";

function Vegan() {
  const {
    data: vegan,
    error,
    isLoading,
  } = useGetTypeFoodByCategoryQuery("Vegan");


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
    <div className=" mx-auto px-2">
      <div>
        <h1 className="text-black font-semibold">Vegan/Vegetarian Recipes</h1>
      </div>
      <div className="flex gap-3 justify-between">
        {vegan &&
          vegan.map((vegan,index) => (
            <div key={index} className="flex flex-row items-start w-[300px] my-5">
              <div className="flex flex-col items-start justify-between bg-white hover:bg-orange-200 p-3">
                <div>
                  <img
                    src={vegan.image}
                    alt="hình"
                  />
                </div>
                <div>
                  <div className="bg-black text-white font-semibold w-[140px] p-1">
                    {/* @ts-ignore */}
                    <span>{vegan.topic[1]}</span>
                  </div>
                  <div className="mt-2 font-bold text-lg">
                    <h2>{vegan.name}</h2>
                  </div>
                  <div className="font-semibold text-sm">
                    rating:{vegan.rating} <Rate disabled={true} value={vegan.rating}></Rate>
                  </div>
                  <div className="mt-2 tracking-normal text-justify">
                    <p>
                      {truncateIntro(vegan.intro,6)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vegan;
