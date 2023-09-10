import { useRef, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import ReactToPrint from "react-to-print";

function Board() {
  const [numberServes, setNumberServes] = useState(4);
  const componentRef = useRef(null);
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
          src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/honey-garlic-chicken-3370w-500x500.webp"
          alt=""
          className="w-[250px] rounded-[50%]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-[25px] text-black">
          Honey Garlic Chicken
        </h2>
        <p>The best ingredient back pocket recipe.</p>
      </div>
      <div className="flex flex-row items-center gap-5 justify-center mt-5">
        <div className="font-bold">Serves</div>
        <div
          className=" cursor-pointer"
          onClick={() => setNumberServes(numberServes - 1)}
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
              <p>10 mins</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3 className="font-semibold">Cook Time</h3>
              <p>15 mins</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3 className="font-semibold">Total Time</h3>
              <p>25 mins</p>
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
            <li className="mt-5 relative left-10">1 lb chicken of choice</li>
            <li className="relative left-10">1 lb chicken of choice</li>
            <li className="relative left-10">1 lb chicken of choice</li>
            <li className="relative left-10">1 lb chicken of choice</li>
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
            <li className="mt-5 px-5 relative left-5 ">
              Pat the chicken dry and season all sides with salt and pepper.
              Heat a skillet over medium high and add a bit of oil. When hot,
              add the chicken, skin side down if using skin on chicken and cook,
              until golden and cooked through, flipping as needed. See chart for
              approximate cook times.
            </li>
            <li className="mt-5  px-5 relative left-5">
              When the chicken is cooked through, push the chicken to one side
              of the pan and add the garlic and cook, stirring, until soft and
              fragrant. Stir in the honey, vinegar, and soy sauce and let bubble
              and simmer, stirring. Coat the chicken in the sauce and let it
              thicken slightly. Remove from the pan, being sure to scoop up the
              extra sauce and enjoy!
            </li>
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
              <p>Honey Garlic Chicken</p>
            </div>
            <div className="bg-[#333] h-[10px] w-full"></div>
            <div className="my-1">
              <p className="font-bold">
                Calories <span className="font-normal">226</span>
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
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Saturated Fat</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Cholesterol</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">sodium</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">carbohydrates</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">sugar</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">fiber</p>
                <span className="font-normal">226g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">protein</p>
                <span className="font-normal">226g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
