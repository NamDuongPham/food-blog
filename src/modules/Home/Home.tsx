import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useTitle } from "../../hooks/useTitle";
import { useGetTypeFoodQuery } from "../../services/typeFoodService";
import BannerGrid from "./components/BannerGrid/BannerGrid";
import PopularRecipes from "./components/PopularRecipes/PopularRecipes";
import RecipesList from "./components/RecipesList/RecipesList";

function Home() {
  const { data } = useGetTypeFoodQuery();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  console.log(categoryParam);

  const filteredData = categoryParam
    ? data?.filter((card) => card.category === categoryParam)
    : data;

  useTitle("Home");
  return (
    <>
      {categoryParam ? (
        <div className="flex flex-row gap-5 bg-[#fafafa] h-full">
          {filteredData?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <>
          <BannerGrid />
          <PopularRecipes />
          <RecipesList />
        </>
      )}
    </>
  );
}

export default Home;
