import { useParams } from "react-router-dom";
import { useGetTypeFoodByIdQuery } from "../../../../services/typeFoodService";
import Board from "./Board/Board";
import Review from "./Review/Review";
function InfoDetail() {
  interface FoodStep {
    name: string;
    use: string;
  }
  const { id } = useParams();
  const { data: food } = useGetTypeFoodByIdQuery(id);
  console.log(food);
  if (!food) {
    return <div>Loading...</div>;
  }
  const whatAbout = food.what;
  return (
    <>
      <div>
        <div>
          <img src={food.image} alt="hình" />
        </div>
        <div className="mt-3">
          <div>
            <h1 className="font-semibold text-[29px] text-black">
              What {food.name} ingredients
            </h1>
            <div className="mt-2">
              <p className="text-justify">
                {whatAbout.split("").map((letter: string, index: number) => (
                  <span
                    key={index}
                    className="text-lg leading-10 tracking-wide hover:text-red-500 hover:font-bold  cursor-pointer"
                  >
                    {letter}
                  </span>
                ))}
                ,
              </p>
            </div>
          </div>
          {/* why */}
          <div style={{ borderTop: "1px solid gray" }} className="my-5">
            <h1 className="font-semibold text-[29px] text-black">
              How make {food.name}
            </h1>
            <div className="mt-2">
              <ul className="list-disc flex flex-col gap-6">
                {food?.how.map((step: FoodStep, index: number) => (
                  <li className="text-lg tracking-wide leading-5 text-justify" key={index}>
                    <span className="font-bold">{step.name}</span> -{step.use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* board */}
          <div style={{ borderTop: "1px solid gray" }}></div>
          <div>
            <Board food={food}/>
          </div>
          {/* comment */}
          <div style={{ borderTop: "1px solid gray" }}></div>
          <div>
            <Review food={food}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoDetail;
