import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopSliceActions } from "../store/ShopReducer";
const ProductDetailDesplay = () => {
  const count = useSelector((state) => state.shop.count);
  const item = useSelector((state) => state.shop.item);
  const dispatch = useDispatch();
  const onclickDecrease = (id) => {
    dispatch(shopSliceActions.removefromCart(id));
  };
  return (
    <div className="container d-flex flex-row">
      <img src={item.image} alt="sdd" className="image-fluid" />
      <p>{item.price}</p>
      <div className="container d-flex flex-row justify-content-center align-item-center">
        <button
          onClick={() => onclickDecrease(item.id)}
          className="btn btn-outline-secondary"
          style={{ height: "25px", width: "100px" }}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          className="btn btn-outline-secondary"
          style={{ height: "25px", width: "100px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductDetailDesplay;
