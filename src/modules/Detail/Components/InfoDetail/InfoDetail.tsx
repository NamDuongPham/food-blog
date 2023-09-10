import Board from "./Board/Board";
import Comment from "./Comment/Comment";
function InfoDetail() {
  const what ="If you’re reading all this and wondering, what is Honey Garlic Chicken, I got you! Honey Garlic Chicken is a delicious dish made with tender chicken pieces coated in a sweet and savory sauce made from honey, garlic, and other seasonings. It is a popular dish in many cuisines, known for its flavorful combination of sticky sweetness and garlicky goodness. Honey Garlic Chicken is often served with steamed rice or noodles and is enjoyed as a main course. Its mouthwatering taste and irresistible aroma make it a favorite choice for chicken lovers."
  return (
    <div>
      <div>
        <img
          src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/honey-garlic-chicken-3370w-1024x683.jpg"
          alt=""
        />
      </div>
      <div className="mt-3">
        <div>
          <h1 className="font-semibold text-[29px] text-black">
            What Honey garlic chicken ingredients
          </h1>
          <div className="mt-2">
            <p className="text-justify">
            {what.split("").map((letter, index) => (
        <span key={index} className="text-lg leading-10 tracking-wide hover:text-red-500 hover:font-bold  cursor-pointer">
          {letter}
        </span>
      ))},
            </p>
          </div>
        </div>
        {/* why */}
        <div style={{ borderTop: "1px solid gray" }} className="my-5">
          <h1 className="font-semibold text-[29px] text-black">
            Why should make Honey garlic chicken ingredients
          </h1>
          <div className="mt-2">
            <ul className="list-disc flex flex-col gap-6">
              <li className="text-lg ">super easy, barely an inconvenience</li>
              <li className="text-lg ">
                making it at home means your chicken can be extra saucy
              </li>
              <li className="text-lg ">
                you can customize it to your own taste with extra garlic or not
                too much garlic
              </li>
            </ul>
          </div>
        </div>
        {/* board */}
        <div style={{ borderTop: "1px solid gray" }}></div>
        <div>
          <Board />
        </div>
        {/* comment */}
        <div style={{ borderTop: "1px solid gray" }}></div>
        <div>
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
