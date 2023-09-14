import { Link } from "react-router-dom";
import { SITE_MAP } from "../../../../constants/site-map";

interface IProps {
  title: string;
  image: string;
}

function CardChildren(props: IProps) {
  const { title, image } = props;
  return (
   <Link to={SITE_MAP.DETAILLIVE.url}>
     <div className="basis-1/4 my-8 ">
      <div className="h-[14rem] sm:h-[17rem] sm:w-60 md:h-[17rem] md:w-52 ">
        <img
          src={image}
          alt=""
          className="object cover  h-full rounded-[0.5rem]"
        />
      </div>
      <p className="font-semibold text-[18px]">{title}</p>
      <p className=" text-gray-600 -mt-1">417k viewers</p>
    </div>
   </Link>
  );
}

export default CardChildren;
