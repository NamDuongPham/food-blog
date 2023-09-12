import { useGetReviewByIdQuery } from "../../../../../services/reviewService";
import { TypeFood } from "../../../../../types/food";

interface IPropsFood {
  food: TypeFood;
}
function Review(props: IPropsFood) {
  const { food } = props;
  const {data:review} =useGetReviewByIdQuery(food?.id)
  console.log(review);
  
  return (
    <div className="mx-auto container mt-5">
      <div className="my-5">
        <h2 className="font-bold text-[25px]">{review?.length} Reivews</h2>
      </div>
      <div className="flex flex-col items-start justify-start bg-[#f8f8f8]">
        <div className=" w-full p-4">
        {review?.map((review,index)=>(
           <div key={index} className="bg-white p-2 mt-3" style={{borderBottom:"1px solid black"}}>
           <div>
              <p className="font-semibold text-lg"> {review.author} :</p>
            </div>
            <div className="my-4 text-[20px]">
              <p>{review.comment}</p>
            </div>
            <div>
              <p className="text-sm text-red-400" >August 25, 2023 at 11:14 am</p>
            </div>
           </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
