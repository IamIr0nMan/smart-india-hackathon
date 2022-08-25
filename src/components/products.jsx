import React from "react";
import "./products.css";
export default function Products(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img
          src={props.image}
          alt="product.img"
          height="300"
          width="300"
          className="productImage"
        ></img>
        <div className="productCard__content">
          <h3 className="productName"> {props.name}</h3>
        </div>
      </div>
    </div>
  );
}
