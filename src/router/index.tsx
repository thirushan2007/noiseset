import { Route, Routes } from "react-router-dom";
import HomeTab from "../screens/home/mainhome/Home";
import ProductList from "../screens/productlisting/productlisting";
import ProductDetails from "../common/details/Details";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/noiseset" Component={HomeTab} />
      <Route path="/all-products" Component={ProductList} />
      <Route path="/product-details" Component={ProductDetails} />
    </Routes>
  );
};

export default MainRouter;
