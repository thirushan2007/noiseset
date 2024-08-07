import "./gridtwo.css";
const GridTwo = () => {
  return (
    <div>
      <div className="grid-container-one">
        <div className="class-two">
          <img
            className="gridimage grid-pop-two"
            src="https://www.gonoise.com/cdn/shop/files/Combat_480x.png?v=1688453993"
            alt="watch"
          />
          <img
            className="gridimage grid-pop-three"
            src="https://www.gonoise.com/cdn/shop/files/102_plus_480x.png?v=1688455197"
            alt="Adventure"
          />
          <img
            className="gridimage grid-pop-four"
            src="https://www.gonoise.com/cdn/shop/files/Conncet_480x.png?v=1688454269"
            alt="Adventure"
          />
          <img
            className="gridimage grid-pop-five"
            src="https://www.gonoise.com/cdn/shop/files/102_pro_480x.png?v=1688453974"
            alt="Adventure"
          />
        </div>
        <div className="class-one">
          <img
            className="grid-pop-one"
            src="https://www.gonoise.com/cdn/shop/files/desktop_IMAGES_1000x.jpg?v=1704187399"
            alt="grid"
          />
        </div>
        <div className="grid-three-image">
          <img
            src="https://www.gonoise.com/cdn/shop/files/tapsee_desktop_1000x.jpg?v=1703575421"
            alt="image"
          />
        </div>
        <div className="hardcoded-grid">
          <h1 className="brand-hardcoded">Hear the Noise First</h1>
          <p className="instruction">
            Sign up now to hear about our latest offers, new products,
            collaborations, all things Noise - straight to your inbox.
          </p>
          <div className="grid-input">
            <input type="text" placeholder="Your email here" />
          </div>
          <div className="grid-button">
            <button className="button-grid">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTwo;
