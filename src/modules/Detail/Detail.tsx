import InfoDetail from "./Components/InfoDetail/InfoDetail";
import InfoSlideBar from "./Components/InfoSlideBar/InfoSlideBar";

function Detail() {
  return (
    <div className="mx-auto container lg:mx-10">
      <div>
        <h1 className="font-bold text-black text-center">
          Honey Garlic Chicken
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center mt-5">
        <div className="flex flex-row items-center gap-4 text-center font-semibold">
          <div className="bg-black text-white w-[120px] p-2">
            <span>chinese take out</span>
          </div>
          <div className="bg-black text-white w-[120px] p-2">
            <span>chinese take out</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-5 flex flex-row justify-between">
        <div className="basis-2/3">
            <InfoDetail/>
        </div>
        <div className="basis-1/3 pl-[40px]">
            <InfoSlideBar/>
        </div>
      </div>
    </div>
  );
}

export default Detail;
