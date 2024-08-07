import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./common/header/Header";
import { Route, Routes } from "react-router-dom";
import Menus from "./screens/home/designcom/Menus";
import ProductCard from "./screens/home/productcard/Productcard";
import MainRouter from "./router";
import FooterCard from "./common/footer/Footer";
import Banner from "./common/banner/Banner";

function App() {
  return (
    <div>
      <Banner />

      <Header />

      <MainRouter />

      <FooterCard />
    </div>
  );
}

export default App;
