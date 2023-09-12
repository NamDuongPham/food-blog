import { useRef, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import ReactToPrint from "react-to-print";
import { useGetRecipeByFoodIdQuery } from "../../../../../services/recipeService";
import { TypeFood } from "../../../../../types/food";
interface IPropsFood {
  food: TypeFood;
}
function Board(props: IPropsFood) {
  const { food } = props;

  const componentRef = useRef(null);
  console.log(food.id);

  const { data: recipe } = useGetRecipeByFoodIdQuery(food?.id);
  console.log(recipe);
  const serves: string = recipe?.[0]?.serves ?? "4";
  const [numberServes, setNumberServes] = useState<number>(parseInt(serves));
  console.log(numberServes);

  return (
    <div className="bg-[#f8f8f8] my-5" ref={componentRef}>
      <div className="cursor-pointer">
        <ReactToPrint
          trigger={() => <AiOutlinePrinter size={30} />}
          content={() => componentRef.current}
        />
      </div>
      <div className="flex items-center justify-center p-5">
        <img
          src={recipe?.[0]?.image}
          alt=""
          className="w-[200px] rounded-[50%]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-[25px] text-black">
          {recipe?.[0]?.name}
        </h2>
        <p>The best ingredient back pocket recipe.</p>
      </div>
      <div className="flex flex-row items-center gap-5 justify-center mt-5">
        <div className="font-bold">Serves</div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            if (numberServes > 0) {
              setNumberServes(numberServes - 1);
            }
          }}
        >
          -
        </div>
        <div>{numberServes}</div>
        <div
          className="cursor-pointer"
          onClick={() => setNumberServes(numberServes + 1)}
        >
          +
        </div>
      </div>
      <div className="px-10 ">
        <div className="flex flex-row items-center justify-around  mt-3 bg-white">
          <div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3 className="font-semibold">Prep Time</h3>
              <p>{recipe?.[0]?.prepTime} mins</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3 className="font-semibold">Cook Time</h3>
              <p>{recipe?.[0]?.cookTime} mins</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3 className="font-semibold">Total Time</h3>
              <p>{recipe?.[0]?.totalTime} mins</p>
            </div>
          </div>
        </div>
      </div>
      {/* ingredients */}
      <div className="mt-4">
        <div>
          <h2 className="font-bold text-[25px]">Ingredients</h2>
        </div>
        <div>
          <ul className="list-disc flex flex-col gap-6">
            {recipe?.[0].ingredients.map((ingrediendents, index) => (
              <li key={index} className="mt-5 relative left-10">
                {ingrediendents.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* instruction */}
      <div className="mt-5">
        <div>
          <h2 className="font-bold text-[25px]">Instructions</h2>
        </div>
        <div className="mt-5">
          <ol className="list-decimal flex flex-col gap-6">
            {recipe?.[0].instructions.map((instruc, index) => (
              <li key={index} className="mt-5 px-5 relative left-5 ">
                {instruc.step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* nutrition */}
      <div className="mt-5">
        <div>
          <h2 className="font-bold text-[25px]">Estimated Nutrition</h2>
        </div>
        <div className="flex justify-center mt-5">
          <div className="bg-white w-[500px] border-solid border-2 border-stone-800 flex flex-col items-start justify-start p-4">
            <div>
              <h3 className="font-semibold text-[25px] ">Nutrition Facts</h3>
            </div>
            <div className="my-5">
              <p>{recipe?.[0]?.name}</p>
            </div>
            <div className="bg-[#333] h-[10px] w-full"></div>
            <div className="my-1">
              <p className="font-bold">
                Calories <span className="font-normal">{recipe?.[0]?.calories}</span>
              </p>
            </div>
            <div className="bg-[#333] h-[5px] w-full"></div>
            <div className="flex justify-end items-end my-2 w-full font-semibold">
              Daily Value
            </div>
            <div className="bg-[#333] h-[1px] w-full"></div>
            <div className="my-2 w-full flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="font-bold">Fat</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.fat}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Saturated Fat</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.saturated_fat}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Cholesterol</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.cholesterol}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">sodium</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.sodium}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">carbohydrates</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.carbohydrates}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">sugar</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.sugar}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">fiber</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.fiber}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">protein</p>
                <span className="font-normal">{recipe?.[0]?.nutrition.protein}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
