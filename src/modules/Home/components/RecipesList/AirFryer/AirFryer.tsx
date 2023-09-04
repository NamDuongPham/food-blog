import { Rate } from "antd";

function AirFryer() {
    return (
        <div className="container mx-auto">
        <div>
          <h1 className="text-black font-semibold">We love our air fryer</h1>
        </div>
        <div className="flex flex-row items-center w-[300px] my-5">
          <div className="flex flex-col items-center justify-between bg-white p-3">
            <div>
              <img
                src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/honey-garlic-chicken-3370w-600x400.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-black text-white font-semibold w-[140px] p-1">
                <span>Chinese Take Out</span>
              </div>
              <div className="mt-2 font-bold text-lg">
                <h2>Honey Garlic Chicken</h2>
              </div>
              <div className="font-semibold text-sm">
                rating:4.87 <Rate defaultValue={4}></Rate>
              </div>
              <div className="mt-2 tracking-normal text-justify">
                <p>
                  This is the best 5 ingredient back pocket recipe: sweet and
                  sticky, savory and garlicky, honey garlic chicken. Perfect
                  chicken in 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AirFryer;