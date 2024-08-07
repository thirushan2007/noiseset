import { useContext } from "react";
import "./Productcard.css";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

interface ProductCardTypes {
  offer: string;
  imagelink: string;
  name: string;
  specification: string;
  offprice: string;
  rating?: boolean;
}

const ProductCard = (props: ProductCardTypes) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: "pointer" }}
      className="product-card"
      onClick={() => {
        navigate("/all-products");
      }}
    >
      <div className="product-image-offer">
        <p className="hot-deal">{props.offer}</p>
        <>
          <img className="product-image" src={props.imagelink} alt="dad" />
        </>
      </div>
      <div className="Detials">
        <p className="product-title">{props.name}</p>
        <p className="product-info">{props.specification}</p>
        <div className="price-rating">
          <p className="price">₹{props.offprice}</p>
          <p className="rating">{props.rating}</p>
        </div>
      </div>
    </div>
    // <div className="parent-card-container">
    //   <div className="deal-image">
    //     <p className="hot-deal">{data.offer}</p>
    //     <div>
    //       <img className="product-image" src={data.img} alt="DAD" />
    //     </div>
    //     <div className="name-spec-price">
    //       <p className="product-title">{data.name}</p>
    //       <p className="product-spec">{data.specification}</p>
    //       <p className="product-price">{data.price}</p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default ProductCard;
