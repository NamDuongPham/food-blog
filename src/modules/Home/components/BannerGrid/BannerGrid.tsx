function BannerGrid() {
  return (
    <div className="container mx-auto" style={{ borderTop: "1px solid gray" }}>
    <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
      {/*  */}
      <div className="row-span-3 col-span-2 relative">
        <div>
          <img
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/honey-garlic-chicken-3370w-2048x1366.webp"
            alt="hình"
          />
        </div>
        <div className="absolute bottom-4 font-semibold text-center px-5 leading-normal">
          <p className="bg-black text-white w-[150px] px-2">
            Chineses Take Out
          </p>
          <span className="bg-white px-2 text-[35px] text-black ">
            honey garlic chicken
          </span>
        </div>
      </div>
      {/*  */}
      <div className="row-span-3 col-span-1 relative">
        <div className="h-full">
          <img
            height="100"
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/05/buldak-noodles-2718w-1536x1025.webp"
            alt="hình"
            className="h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 font-semibold px-5 leading-normal">
          <p className="bg-black text-white w-[150px] px-2">Korean Food</p>
          <span className="bg-white px-2 text-[35px] text-black break-words leading-tight">
            How to make Buldak Ramen at home
          </span>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
    {/*  */}
    <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
      {/*  */}
      <div className="row-span-3 col-span-1 relative">
        <div className="h-full">
          <img
            height="100"
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/spring-rolls-3876w-2.jpg"
            alt="hình"
            className="h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 font-semibold px-5 ">
          <p className="bg-black text-white w-[150px] px-2">
            Vietnamese Food
          </p>
          <span className="bg-white px-2 text-[35px] text-black break-words leading-normal">
            Vietnamese Fresh Spring Rolls aka Summer Rolls aka Salad Rolls
          </span>
        </div>
      </div>
      {/*  */}
      <div className="row-span-3 col-span-2 relative">
        <div>
          <img
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/15-minute-khao-soi-6916w.jpg"
            alt="hình"
          />
        </div>
        <div className="absolute top-5 left-2 font-semibold p-5 bg-black w-[400px]">
          <p className="bg-black text-white w-[150px] px-2">Noodle</p>
          <span className="bg-white px-2 text-[25px] text-black leading-normal">
            Khao soi: deliciously warming coconut curry noodles in just 15
            minutes.
          </span>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="grid grid-row-8 grid-cols-3 gap-4 my-5">
      {/*  */}
      <div className="row-span-1 col-span-1 relative">
        <div className="h-full">
          <img
            height="100"
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2023/08/kimbap-3018w.jpg"
            alt="hình"
            className="h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 font-semibold px-5 ">
          <p className="bg-black text-white w-[150px] px-2">Korean Food</p>
          <span className="bg-white px-2 text-[25px] text-black break-words leading-tight">
            Trader Joes Kimbap Review +Recipe
          </span>
        </div>
      </div>
      {/*  */}
      <div className="row-span-1 col-span-1 relative">
        <div className="bg-gradient-to-b from-[#326946] to-[#FFD0AE] ">
          <img
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2023/08/refrigerate-tomatoes-2938w.jpg"
            alt="hình"
            className="opacity-[0.3]"
          />
        </div>
        <div className="absolute top-[40%] font-semibold text-center">
          <p className="bg-black text-white w-[50px] px-2 relative left-[45%]">
            Tips
          </p>
          <span className="bg-white px-2 text-[25px] text-black leading-tight">
            Why you shouldn’t refrigerate your tomatoes
          </span>
        </div>
      </div>
      {/*  */}
      <div className="row-span-1 col-span-1 relative">
        <div>
          <img
            width="100%"
            src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/11/easy-sweet-sour-chicken-recipe-8851w-1024x683.jpg"
            alt="hình"
          />
        </div>
        <div className="absolute bottom-4  font-semibold px-5 ">
          <p className="bg-black text-white w-[150px] px-2">Korean Food</p>
          <span className="bg-white px-2 text-[25px] text-black break-words leading-tight">
            Sweet and Sour Chicken
          </span>
        </div>
      </div>
    </div>
    {/*  */}
  </div>
  )
}

export default BannerGrid;
