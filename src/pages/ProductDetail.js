import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading";

import { shopSliceActions } from "../store/ShopReducer";
import { useDispatch } from "react-redux";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if ((!response).ok) {
          throw new Error("something went wrong");
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchedData();
  }, [id]);
  const addCart = () => {
    dispatch(
      shopSliceActions.addtoCart({
        id: product.id,
        image: product.image,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
      })
    );
  };
  return (
    <div key={product.id} className="container row-md-4">
      <div className="container col">
        <img
          src={product.image}
          alt="ther is no image"
          className="img-fluid"
          style={{ height: "250px" }}
        />
      </div>
      <div className="col">
        <div className="container d-flex flex-column">
          <h1>{product.category}</h1>
          <h1>{product.title}</h1>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="container d-flex flex-row justify-content-center align-item-center m-2">
        <button className="btn btn-outline-primary" onClick={addCart}>
          add to cart
        </button>

        <Link to="/cart">
          <button className="btn btn-outline-primary">go to cart</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
