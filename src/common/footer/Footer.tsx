import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterCard = () => {
  return (
    <footer>
      <div className="color-div">
        <img
          className="brand-title"
          src="https://www.gonoise.com/cdn/shop/files/Mobile_FOOT_0338a7a9-7a66-4758-a2fb-3efab172aee8_180x.png?v=1696847044"
          alt="NOISE"
        />
        <div className="all-flex-container">
          <div className="first-flex">
            FOLLOW US <br />
            <div>
              <ul className="flexing">
                <li>
                  <img
                    className="social-media fb"
                    src="https://www.gonoise.com/cdn/shop/files/fb_1x.png?v=1614333746"
                    alt="fb"
                  />
                </li>
                <li>
                  <img
                    className="social-media ig"
                    src="https://www.gonoise.com/cdn/shop/files/Instagram_1x.png?v=1614333746"
                    alt="ig"
                  />
                </li>
                <li>
                  <img
                    className="social-media yt"
                    src="https://www.gonoise.com/cdn/shop/files/youtube_1x.png?v=1614333746"
                    alt="yt"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="second-flex">
            <h6>Our Products</h6>
            <ul>
              <li>Smart Watches</li>
              <li>Wireless Earbuds</li>
              <li>Luna Smart Ring</li>
              <li>NoiseFit App</li>
              <li>Noise Gift Card</li>
            </ul>
            <br />
            <h6>For Bussiness</h6>
            <ul>
              <li>Noise for Business</li>
              <li>Corporate Enquires</li>
              <li>Brand Partnership Enquires</li>
            </ul>
          </div>
          <div className="third-flex">
            <h6>About Noise</h6>
            <ul>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Career</li>
              <li>In the Press</li>
            </ul>
            <br />
            <h6>Legal</h6>
            <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Social Responsiblity</li>
            </ul>
          </div>
          <div className="fourth-flex">
            <h6>Support</h6>
            <ul>
              <li>Download Your Invoice</li>
              <li>Track Your Order</li>
              <li>Shipping and Return Policy</li>
              <li>Register Your Warranty</li>
              <li>Product Support</li>
              <li>Register a Complaint</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCard;
