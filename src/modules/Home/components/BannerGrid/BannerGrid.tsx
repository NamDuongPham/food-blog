import { Link } from "react-router-dom";
import { useGetTypeFoodQuery } from "../../../../services/typeFoodService";

function BannerGrid() {
  const { data: food } = useGetTypeFoodQuery();

  console.log(food);

  return (
    <div className=" mx-auto w-full " style={{ borderTop: "1px solid gray" }}>
      <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
        {/*  */}
        <div className="row-span-3 col-span-2 relative">
          <Link to={`/detail/recipe/${food && food[0]?.id}`}>
            <div>
              <img width="100%" src={food && food[0]?.image} alt="hình" />
            </div>
            <div className="absolute bottom-4 font-semibold text-center px-5 leading-normal">
              <p className="bg-black text-white w-[150px] px-2">
                {/* @ts-ignore */}
                {food && food[0]?.topic[0]}
              </p>
              <span className="bg-white px-2 text-[35px] text-black ">
                {food && food[0]?.name}
              </span>
            </div>
          </Link>
        </div>

        {/*  */}
        <div className="row-span-3 col-span-1 relative">
          <Link to={`/detail/recipe/${food && food[2]?.id}`}>
            <div className="h-full">
              <img
                height="100"
                width="100%"
                src={food && food[2]?.image}
                alt="hình"
                className="h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 font-semibold px-5 leading-normal">
              <p className="bg-black text-white w-[150px] px-2">
                {/* @ts-ignore */}
                {food && food[2]?.topic[1]}
              </p>
              <span className="bg-white px-2 text-[35px] text-black break-words leading-tight">
                {food && food[2]?.name}
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        {/*  */}
      </div>
      {/*  */}
      <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
        {/*  */}
        <div className="row-span-3 col-span-1 relative">
          <Link to={`/detail/recipe/${food && food[14]?.id}`}>
            <div className="h-full">
              <img
                height="100"
                width="100%"
                src={food && food[14]?.image}
                alt="hình"
                className="h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 font-semibold px-5 ">
              <p className="bg-black text-white w-[150px] p-2">
                {/* @ts-ignore */}
                {food && food[14]?.topic[1]}
              </p>
              <span className="bg-white px-2 text-[35px] text-black break-words leading-normal">
                {food && food[14]?.name}
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="row-span-3 col-span-2 relative">
          <Link to={`/detail/recipe/${food && food[4]?.id}`}>
            <div>
              <img width="100%" src={food && food[4]?.image} alt="hình" />
            </div>
            <div className="absolute top-5 left-2 font-semibold p-5 bg-black w-[400px]">
              <p className="bg-black text-white w-[150px] px-2">
                {/* @ts-ignore */}
                {food && food[4]?.topic[0]}
              </p>
              <span className="bg-white px-2 text-[25px] text-black leading-normal">
                {food && food[4]?.name}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
        {/*  */}
        <div className="row-span-1 col-span-1 relative">
          <Link to={`/detail/recipe/${food && food[18]?.id}`}>
            <div className="h-full">
              <img
                height="100"
                width="100%"
                src={food && food[18]?.image}
                alt="hình"
                className="h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 font-semibold px-5 ">
              <p className="bg-black text-white w-[150px] p-2">
                {/* @ts-ignore */}
                {food && food[18]?.topic[0]}
              </p>
              <span className="bg-white px-2 text-[25px] text-black break-words leading-tight">
                {food && food[18]?.name}
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="row-span-1 col-span-1 relative">
          <Link to={`/detail/recipe/${food && food[20]?.id}`}>
            <div className="bg-gradient-to-b from-[#326946] to-[#FFD0AE] ">
              <img
                width="100%"
                src={food && food[20]?.image}
                alt="hình"
                className="opacity-[0.3]"
              />
            </div>
            <div className="absolute top-[40%] font-semibold text-center">
              <p className="bg-black text-white w-[50px] p-2 relative left-[45%] top-[-20px]">
                {food && food[20]?.category}
              </p>
              <span className="bg-white px-2 text-[25px] text-black leading-tight">
                {food && food[20]?.name}
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="row-span-1 col-span-1 relative">
          <Link to={`/detail/recipe/${food && food[19]?.id}`}>
            <div>
              <img width="100%" src={food && food[19]?.image} alt="hình" />
            </div>
            <div className="absolute bottom-4  font-semibold px-5 ">
              <p className="bg-black text-white w-[150px] px-2">
                {/* @ts-ignore */}
                {food && food[19]?.topic[0]}
              </p>
              <span className="bg-white px-2 text-[25px] text-black break-words leading-tight">
                {food && food[19]?.name}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default BannerGrid;
