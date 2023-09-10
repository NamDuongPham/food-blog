import { Rate } from "antd";
import { TypeFood } from "../../types/food";
interface ICardProp {
  card: TypeFood;
}
function Card(props: ICardProp) {
  const { card } = props;
  console.log(card);

  const truncateIntro = (intro: string, wordCount: number) => {
    const words = intro.split(" ");
    if (words.length > wordCount) {
      const truncatedWords = words.slice(0, wordCount);
      return `${truncatedWords.join(" ")}...`;
    }
    return intro;
  };
  return (
    <div className="container w-[300px] " >
      <div className=" flex flex-row justify-start">
        <div className="flex flex-row items-center w-[300px]  ">
          <div className="flex flex-col items-start justify-between bg-white hover:bg-orange-200 p-3">
            <div>
              <img src={card.image} alt="hình" />
            </div>
            <div>
              <div className="bg-black text-white font-semibold w-[140px] p-1">
                {/* @ts-ignore */}
                <span>{card.topic[0]}</span>
              </div>
              <div className="mt-2 font-bold text-lg">
                <h2>{card.name}</h2>
              </div>
              <div className="font-semibold text-sm">
                rating:{card.rating}{" "}
                <Rate disabled={true} value={card.rating}></Rate>
              </div>
              <div className="  text-justify">
                <p>{truncateIntro(card.intro, 5)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
