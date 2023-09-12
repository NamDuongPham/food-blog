import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useGetTypeFoodByIdQuery } from "../../services/typeFoodService";
import InfoDetail from "./Components/InfoDetail/InfoDetail";
import InfoSlideBar from "./Components/InfoSlideBar/InfoSlideBar";

function Detail() {
  const { id } = useParams();

  const { data: food } = useGetTypeFoodByIdQuery(id);

  useTitle("detail");
  console.log(food);

  return (
    <div className="  lg:mx-10">
      <div>
        <h1 className="font-bold text-black text-center">{food?.name}</h1>
      </div>
      {/*  */}
      {food?.topic && (
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="flex flex-row items-center gap-4 text-center font-semibold">
            {food?.topic.map((topic: string, index: number) => (
              <div key={index} className="bg-black text-white w-[120px] p-2">
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/*  */}
      <div className="mt-5 flex flex-row justify-between">
        <div className="basis-2/3 ">
          <InfoDetail />
        </div>
        <div className="basis-1/3 md:basis-1/3  pl-[30px]">
          <InfoSlideBar />
        </div>
      </div>
    </div>
  );
}

export default Detail;
