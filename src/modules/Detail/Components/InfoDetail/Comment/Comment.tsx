function Comment() {
  return (
    <div className="mx-auto container mt-5">
      <div className="my-5">
        <h2 className="font-bold text-[25px]">6 Comments</h2>
      </div>
      <div className="flex flex-col items-start justify-start bg-[#f8f8f8]">
        <div className=" w-full p-4">
         <div className="bg-white p-2" style={{borderBottom:"1px solid black"}}>
         <div>
            <p className="font-semibold"> Angelina :</p>
          </div>
          <div className="my-4">
            <p>Here in Chicago it should be a available on 8/26!</p>
          </div>
          <div>
            <p className="text-sm ">August 25, 2023 at 11:14 am</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
