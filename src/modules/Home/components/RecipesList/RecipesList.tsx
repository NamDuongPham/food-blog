import AirFryer from "./AirFryer/AirFryer";
import ChickenList from "./ChickenList/ChickenList";
import Vegan from "./Vegan/Vegan";


function RecipesList() {
  return (
  <div className="bg-[#fafafa] min-h-[1000px] cursor-pointer">
    <ChickenList/>
    <AirFryer/>
    <Vegan/>
  </div>
  );
}

export default RecipesList;
