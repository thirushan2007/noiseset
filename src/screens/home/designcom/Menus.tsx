import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menus.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

interface MenuProductType {
  image: string;
  name: string;
}

const Menu = (props: MenuProductType) => {
  return (
    <div>
      <div className="flex-container">
        <a href="" className="small-images">
          <img
            className="product-list-image"
            src={props.image}
            alt="product-list-image"
          />
          <p className="product-list-name">{props.name}</p>
        </a>
      </div>
    </div>
  );
};

export default Menu;
