import { useTitle } from "../../../../hooks/useTitle";
import "./live.css";
function DetailLiveStream() {
  useTitle("Live stream");
  return (
    <div>
      <div>
        <div className="row main mr-0">
          <div className="col-lg-3 channels">
            <br />
            <p className="highlight">Best</p>
            <h1>Channels</h1>
            <br />
            <div className="row activate">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img src="https://i.pinimg.com/originals/b1/92/4d/b1924dce177345b5485bb5490ab3441f.jpg" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <p>Top Risers</p>
                <p
                  style={{ color: "gray", width: "100%", fontSize: 12 }}
                  className="mt-2"
                >
                  Mukbang
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-4"
                style={{ textAlign: "right" }}
              >
                <p>23K</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img src="https://i.pinimg.com/736x/df/85/6c/df856c9c0864ef4f275a2f87468a7f57.jpg" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <p>AllStarsShine</p>
                <p
                  style={{ color: "gray", width: "100%", fontSize: 12 }}
                  className="mt-2"
                >
                  Cooking
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-4"
                style={{ textAlign: "right" }}
              >
                <p>21K</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img src="https://www.wallpapertip.com/wmimgs/168-1689550_free-fire-gaming-youtube-channel.jpg" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <p>SMM1</p>
                <p
                  style={{ color: "gray", width: "100%", fontSize: 12 }}
                  className="mt-2"
                >
                  Review food
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-4"
                style={{ textAlign: "right" }}
              >
                <p>20.8K</p>
              </div>
            </div>

            <br />
            <button className="btn grad btn-lg">Browse More</button>
          </div>
          {/* <div className="col-lg-6 middle">
            <br />
            <div className="jumbo">
              <p>LIVE</p>
              <h1>Season 9 GameX</h1>
              <h1>
                <b>Valorant</b> Tournament
              </h1>
              <br />
              <p>
                Join our season 9 gameX gaming tournament.
                <br /> Free registration.
              </p>
              <button
                className="btn btn-lg btn-orange"
                style={{ textAlign: "center", margin: "auto" }}
              >
                Join Tournament
              </button>
            </div>
            <section style={{ marginTop: "5%" }}>
              <h3 style={{ textAlign: "center" }}>Trending Games</h3>
              <div className="car">
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src="https://wallpapercave.com/wp/wp2441597.jpg" />
                    <h4>Fortnite</h4>
                    <p>206K Viewers</p>
                    <button className="btn log round">Join Now</button>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src="https://wallpaperaccess.com/full/949556.jpg" />
                    <h4>PUBG</h4>
                    <p>236K Viewers</p>
                    <button className="btn log round">Join Now</button>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src="https://i.pinimg.com/originals/34/78/d7/3478d7fd5bda00dc7d0b3ba420a71c21.jpg" />
                    <h4>Apex Legends</h4>
                    <p>186K Viewers</p>
                    <button className="btn log round">Join Now</button>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src="https://wallpapercave.com/wp/wp6996688.jpg" />
                    <h4>Rogue Company</h4>
                    <p>176K Viewers</p>
                    <button className="btn log round">Join Now</button>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
          <div className="col-lg-6 middle">
            <iframe
              width="100%"
              height={480}
              src="https://www.youtube.com/embed/tf6LPLTqU3A"
              title="Asian Street Food 24/7 Live"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="col-lg-2 articles">
            <br />
            <p className="highlight" style={{ width: "35%" }}>
              Popular
            </p>
            <h3>Articles</h3>
            <br />
           
            <div
              className="img-container text-white"
              style={{
                backgroundImage:
                  "url(https://cdn.wallpapersafari.com/61/89/co5DTf.jpg)",
              }}
            >
              <h5 className="my-5 relative -top-14">Cooking is the future of all life</h5>
              
            </div>
            <br />
            <button
              className="btn grad btn-lg"
              style={{ width: "100%", margin: "auto" }}
            >
              Browse More
            </button>
            <br />
            <br />
            <br />
            <p className="highlight" style={{ width: "35%" }}>
              Popular
            </p>
            <h3>Tags</h3>
            <br />
            <div className="tag mr-4 text-white">Cooking 24/7</div>
            
            <br />
          </div>

          {/* <div className="chat bg-[#000]  col-lg-3">
            <div className="header">
              <i tabIndex={0} className="icon chevron right" />
              <p tabIndex={0}>Welcome to room Chat</p>
              <i tabIndex={0} className="icon users" />
            </div>
            
            <div className="text-white flex flex-col justify-start">
              dấdsds
            </div>
            <div className="actions">
              <form action="#" className="actions-form">
                <textarea
                  className="input-message"
                  placeholder="Send a message"
                  defaultValue={""}
                />
            
              </form>
              <div tabIndex={0} className="actions-rewards">
                <i className="icon circle outline" />
                <span className="coin-total">180</span>
              </div>
              <i tabIndex={0} className="actions-setting icon cog" />
              <button className="actions-sendMessage form-button">Chat</button>
            
            </div>
          </div> */}

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default DetailLiveStream;
