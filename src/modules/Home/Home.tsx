import BannerGrid from "./components/BannerGrid/BannerGrid";
import PopularRecipes from "./components/PopularRecipes/PopularRecipes";
import RecipesList from "./components/RecipesList/RecipesList";

function Home() {
  return (
    <>
      <BannerGrid />
      <PopularRecipes/>
      <RecipesList/>
    </>
  );
}

export default Home;
