import { useGetUsersQuery } from "../../services/userService";
import BannerGrid from "./components/BannerGrid/BannerGrid";
import PopularRecipes from "./components/PopularRecipes/PopularRecipes";
import RecipesList from "./components/RecipesList/RecipesList";

function Home() {
  const {data:user} = useGetUsersQuery()
  console.log(user);
  
  return (
    <>
      <BannerGrid />
      <PopularRecipes/>
      <RecipesList/>
    </>
  );
}

export default Home;
