import { off } from "process";
import ListCard from "../../common/productlist/Product-list-design";
import ProductCard from "../home/productcard/Productcard";
import "./productlisting.css";
import FilterBar from "../../common/filter/Filter";
import { useState } from "react";
import { Earbuds } from "../../common/Data/Earbuds";
import { useLocation, useNavigate } from "react-router-dom";
import { Watches } from "../../common/Data/Watches";

const Productlist = () => {
  const listhead = "Bestseller Gadgets Available";
  const location = useLocation();
  const [allproducts, setallproducts] = useState(
    location.state.category === "Earbuds" ? Earbuds : Watches
  );
  console.log(location);
  // const navigate = useNavigate();
  return (
    <div className="filter-test-bar">
      <div className="filter-bar">
        <FilterBar />
      </div>
      <div>
        <section className="">
          <h2 className="heading-listing">{listhead}</h2>
          <section className="viewall-list" style={{ cursor: "pointer" }}>
            {allproducts.map((item: any) => {
              return (
                <ListCard
                  imagelink={item.imagelink1}
                  name={item.name}
                  offprice={item.offprice}
                  specification={item.specification}
                  price={item.price}
                  off={item.off}
                  rating={item.rating}
                  soldOut={item.soldOut}
                />
              );
            })}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Productlist;
