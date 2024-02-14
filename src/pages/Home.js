import React from "react";
import ima1 from "../assets/wback.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-row bg-secondary p-5">
        <div className="container col-md-6 d-flex flex-column justify-content-center align-item-center">
          <h1>this is the shoping logo</h1>
          <p>the shoping logo is</p>
        </div>
        <div className="container">
          <img src={ima1} alt="ther is no image" className="img-fluid" />
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
