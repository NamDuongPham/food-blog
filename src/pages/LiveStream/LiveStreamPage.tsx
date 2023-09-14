import { useTitle } from "../../hooks/useTitle";
import LiveStream from "../../modules/LiveStream/LiveStream";
import ListChat from "../../modules/LiveStream/components/ListChat/ListChat";

function LiveStreamPage() {
  useTitle("Live Stream");
  return (
    <div className="w-full flex flex-row-reverse">
      <div className="flex ">
        <div className="ml-auto h-[450px] sticky top-10 z-10">
          <ListChat />
        </div>
      </div>
      <LiveStream />
    </div>
  );
}

export default LiveStreamPage;
