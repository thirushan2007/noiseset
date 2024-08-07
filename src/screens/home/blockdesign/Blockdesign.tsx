import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Blockdesign.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface BlockdesignType {
  categoryType: string;
}

const Blockdesign = (props: BlockdesignType) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="design-tag">
        <h4 className="displaying-data">{props.categoryType}</h4>
        <div className="displaying-viewall">
          <p
            onClick={() => {
              navigate("/all-products", {
                state: { category: props.categoryType },
              });
            }}
            className="view-all"
          >
            View all <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blockdesign;
