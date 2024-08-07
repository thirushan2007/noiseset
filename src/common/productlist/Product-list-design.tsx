import { FaStar } from "react-icons/fa";
import "./Product-list-design.css";
import { useNavigate } from "react-router-dom";

interface ProductCardTypes {
  offer?: string;
  imagelink: string;
  name: string;
  specification?: string;
  offprice: string;
  price: string;
  off?: string;
  rating?: string;
  soldOut?: boolean;
}

const ListCard = (props: ProductCardTypes) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="product-card-list"
        onClick={() => {
          navigate("/product-details", { state: { key: props.name } });
        }}
      >
        <div className="product-image-offer">
          <p className="hot-deal">{props.offer}</p>

          {props.soldOut ? (
            <div
              style={{
                width: "250px",
                height: "250px",
                backgroundColor: "white",
                color: "Red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: "0.5",
                margin: "0px auto",
              }}
            >
              Sold Out
            </div>
          ) : (
            <>
              <img
                className="product-image-list"
                src={props.imagelink}
                alt="photo"
              />
            </>
          )}
        </div>
        <div className="Detials-list">
          <p className="product-title-list">{props.name}</p>
          <p className="product-info-list">{props.specification}</p>
          <div className="price-del-off-rat">
            <div className="price-offer-list">
              <p className="price-list">₹{props.offprice}</p>
              <del>{props.price}</del>
              <p className="offer">{props.off}</p>
            </div>

            <div>
              <p>{props.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
