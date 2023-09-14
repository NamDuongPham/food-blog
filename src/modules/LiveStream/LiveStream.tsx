import Browse from "./components/Browse/Browse";
import CardLives from "./components/CardLives/CardLives";

function LiveStream() {

  return <div className="w-full px-4 lg:px-10">
    {/* Browse */}
    <Browse/>
    {/* CardLives */}
    <CardLives/>
  </div>;
}

export default LiveStream;
