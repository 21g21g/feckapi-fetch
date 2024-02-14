import React, { useEffect, useState } from "react";
import Loading from "../component/Loading";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = (text) => {
    setCategory(text);
  };
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="m-3">Latest Products</h1>
      <div className="container d-flex flex-row justify-content-center align-item-center m-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick(null)}
        >
          All
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick("men's clothing")}
        >
          Men's cloth
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick("women's clothing")}
        >
          female's cloth
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick("jewelery")}
        >
          jwlery
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick("electronics")}
        >
          electronics
        </button>
      </div>

      <div className="row d-flex flex-column justify-content-center col-md-10">
        {loading && <Loading />}
        {error && <p>{error}</p>}
        {filteredProducts.map((product) => {
          return (
            <>
              <div className="col col-sm-4 col-md-6">
                <img
                  src={product.image}
                  className="img-fluid"
                  style={{ height: "250px" }}
                />
                <h1>{product.catagory}</h1>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
              </div>
              <Link to={`/product/${product.id}`}>
                {" "}
                <button
                  className="btn btn-outline-secondary"
                  style={{ height: "30px", width: "100px" }}
                >
                  buy now
                </button>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
