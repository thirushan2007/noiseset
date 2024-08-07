import { Carousel } from "react-bootstrap";
import "./Details.css";
import { useLocation } from "react-router-dom";
import { Earbuds } from "../Data/Earbuds";
import { Watches } from "../Data/Watches";

const ProductDetails = () => {
  let location = useLocation();
  console.log(location);

  let Earbudsdata = Earbuds.filter((item) => item.name === location.state.key);
  let Watchesdata = Watches.filter((item) => item.name === location.state.key);

  if (Earbudsdata.length > 0) {
    return (
      <div style={{ display: "flex" }}>
        <div className="details-page">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Earbudsdata[0].imagelink1}
                alt="First slide"
              />
              {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Earbudsdata[0].imagelink2}
                alt="Second slide"
              />
              {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Earbudsdata[0].imagelink1}
                alt="Third slide"
              />
              {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <h2 style={{ marginRight: "10px" }}>{Earbudsdata[0].name}</h2>
          <p style={{ marginRight: "10px" }}>{Earbudsdata[0].specification}</p>
          <div
            style={{
              display: "flex",
              marginRight: "10px",
              borderBottom: "1px solid silver",
            }}
          >
            <h4>{Earbudsdata[0].offprice}</h4>
            <del>{Earbudsdata[0].price}</del>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="details-page">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Watchesdata[0].imagelink1}
                alt="First slide"
              />
              {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Watchesdata[0].imagelink2}
                alt="Second slide"
              />
              {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Watchesdata[0].imagelink1}
                alt="Third slide"
              />
              {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <h2 style={{ marginRight: "10px" }}>{Watchesdata[0].name}</h2>
          <p style={{ marginRight: "10px" }}>{Watchesdata[0].specification}</p>
          <div
            style={{
              display: "flex",
              marginRight: "10px",
              borderBottom: "1px solid silver",
            }}
          >
            <h4>{Watchesdata[0].offprice}</h4>
            <del>{Watchesdata[0].price}</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
