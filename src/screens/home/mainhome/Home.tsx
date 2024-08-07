import Menus from "../designcom/Menus";
import ProductCard from "../productcard/Productcard";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import GridOne from "../griddesignone/gridone";
import GridTwo from "../griddesigntwo/gridtwo";
import ScrollDesign from "../scrollcomp/scroll";
import Blockdesign from "../blockdesign/Blockdesign";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions/useractions";
import { useState } from "react";

const HomeTab = () => {
  const dispatch = useDispatch();
  const store: any = useSelector((state) => state);
  const [cartItems, setCartItems] = useState<any>([]);
  console.log("store", store);
  function setUserInfo() {
    dispatch(setUser("Thirushan"));
  }
  const DisplayProductType = [
    {
      img: "https://www.gonoise.com/cdn/shop/files/Artboard_1_eff0cb9e-6293-493f-ae86-3b55a16ee565.png?v=1715857047",
      name: "Smart Watch",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/2._Wireless_Earbuds.png?v=1715857520",
      name: "Wireless Earbuds",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/3._Gift_Store.png?v=1715857521",
      name: "Gift Store",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/4._Stunning_Straps.png?v=1715857521",
      name: "Straps",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/5._Luna_Ring.png?v=1715857521",
      name: "Luna Ring",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/6._Headphones.png?v=1715857521",
      name: "Headphones",
    },
    {
      img: "https://www.gonoise.com/cdn/shop/files/7._BT_Speakers.png?v=1715857521",
      name: "Speakers",
    },
  ];
  const HotSelling = [
    {
      offer: "IN DEMAND",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/Javelin-Carousel-4-min.png?v=1719905000",
      name: "Noise Javelin",
      specification: "AMOLED Display I 3 Layered Casing...",
      offprice: " 3,999",
    },
    {
      offer: "SUPER SAVER",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/Frame19_c97aa365-4e2d-4667-8d3b-9421c8b836e5.png?v=1701150448",
      name: "ColorFit Pro 5 Max",
      specification: '1.96" Amoled | VO₂ Max',
      offprice: " 4,499",
      rating: "⭐ 5.0",
    },
    {
      offer: "SUPER SAVER",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/Rose2_c8fad402-53ce-4e06-a530-94b4c30ea0d9.png?v=1719210417",
      name: "NoiseFit Diva Smartwatch",
      specification: '1.1" Amoled Diamond Cut Display',
      offprice: " 2,999",
      rating: "⭐ 4.86",
    },
    {
      offer: "PRICE DROP",
      imagelink:
        "https://www.gonoise.com/cdn/shop/products/Icon2-4.png?v=1681610912",
      name: "ColorFit Icon 2",
      specification: '1.8" Display | BT Calling',
      offprice: " 1,199",
      rating: "⭐ 4.98",
    },
  ];
  const JustLaunched = [
    {
      offer: "HOT DEAL",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/1_3941f406-f4ff-4692-8ef4-6719497a0f56.webp?v=1720759157",
      name: "Noise 4",
      specification: "70H Playtime I 40mm driver",
      offprice: " 2,499",
      rating: "⭐ 4.5",
    },
    {
      offer: "BEST VALUE",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/BLACK_647b9ede-19d5-45b7-bab3-5ae345c12a3c.png?v=1712578751",
      name: "Aura Buds",
      specification: "60H Playtime | Dual Pairing",
      offprice: " 1,399",
      rating: "⭐ 4.91",
    },
    {
      offer: "BEST VALUE",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/2_copy_9bb76226-a98f-4bc1-a97a-a59aad1cf870.webp?v=1720443494",
      name: "Buds VS102 Pro",
      specification: "Quad Mic ANC | 70H Playtime",
      offprice: " 1,799",
      rating: "⭐ 4.8",
    },
    {
      offer: "BEST VALUE",
      imagelink:
        "https://www.gonoise.com/cdn/shop/files/4_83ab5e13-fbce-4071-9630-470b86721e85.webp?v=1720440893",
      name: "Buds X Prime",
      specification: "120H playtime | Quad Mic ENC",
      offprice: " 1,799",
      rating: "⭐ 4.96",
    },
  ];
  function addToCart(item: any) {
    setCartItems((prevCartItems: any) => [...prevCartItems, item]);
  }
  return (
    <main>
      <button
        onClick={() => {
          setUserInfo();
        }}
      >
        Click here
      </button>
      <p>{store.CurrentUser.name}</p>
      {/* <div>Cart Items -- {cartItems.length}</div>
          {cartItems.length > 0 &&
            cartItems.map((item: any) => {
              return (
                <div>
                  <p>{props.name}</p>
                </div>
              );
            })} */}
      <div>
        <div className="display-banner">
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.gonoise.com/cdn/shop/files/Dekstop_b50c3df8-3439-49cf-9fd7-8632802f4ce0.webp?v=1721109995"
                alt="First slide"
              />
              {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.gonoise.com/cdn/shop/files/Dekstop_046c428f-f7cb-448f-928e-f1c1fe5b7222.webp?v=1721129534"
                alt="Second slide"
              />
              {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.gonoise.com/cdn/shop/files/Dekstop_19ec917c-3b5a-407f-9e6b-3fce9a3a87ee.webp?v=1720761434"
                alt="Third slide"
              />
              {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.gonoise.com/cdn/shop/files/PurePods-Dekstop_b399d924-a409-4f87-9a41-1351da587883.webp?v=1721018672"
                alt="fourth slide"
              />
              {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <section>
          <section className="displaying-typeOfProduct">
            {DisplayProductType.map((item: any) => {
              return <Menus image={item.img} name={item.name} />;
            })}
          </section>
          <div>
            <Blockdesign categoryType={"Watches"} />
          </div>
        </section>
      </div>
      <section className="product-card-display-container">
        {HotSelling.map((item: any) => {
          return (
            <ProductCard
              offer={item.offer}
              imagelink={item.imagelink}
              name={item.name}
              specification={item.specification}
              offprice={item.offprice}
              rating={item.rating}
            />
          );
        })}
      </section>

      <section>
        <Blockdesign categoryType={"Earbuds"} />
      </section>

      <section className="product-card-display-container">
        {JustLaunched.map((item: any) => {
          return (
            <ProductCard
              offer={item.offer}
              imagelink={item.imagelink}
              name={item.name}
              specification={item.specification}
              offprice={item.offprice}
              rating={item.rating}
            />
          );
        })}
      </section>

      <>
        <img
          style={{
            padding: "20px",
            height: "80vh",
            border: "1px solid rgb(217, 217, 217)",
          }}
          src="https://www.gonoise.com/cdn/shop/files/homepage-banner_6e0bafc7-2a96-487f-8b9c-a6b7c87f3655.jpg?v=1715669508"
          alt="image"
        />
      </>
      <>
        <GridOne />
      </>

      <>
        <img
          style={{
            padding: "20px",
            height: "80vh",
            border: "1px solid rgb(217, 217, 217)",
          }}
          src="https://www.gonoise.com/cdn/shop/files/Desktop2_ef09ed40-ca35-4bff-8f17-b31c8baeef6c.jpg?v=1714634063"
          alt="image"
        />
      </>

      <>
        <GridTwo />
      </>

      <section>
        <Blockdesign categoryType={"Noise Blogs"} />
      </section>

      <div>
        <ScrollDesign />
      </div>
    </main>
  );
};

export default HomeTab;
function useDespatch() {
  throw new Error("Function not implemented.");
}
