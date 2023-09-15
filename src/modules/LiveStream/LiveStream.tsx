import Browse from "./components/Browse/Browse";
import CardLives from "./components/CardLives/CardLives";

function LiveStream() {

  return <div className="w-full ">
    {/* Browse */}
    <Browse/>
    {/* CardLives */}
    <CardLives/>
  </div>;
}

export default LiveStream;
