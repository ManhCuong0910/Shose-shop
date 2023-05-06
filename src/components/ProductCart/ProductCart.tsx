import React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel, RelatedProduct } from "../../redux/ProductReducer/productReducer";

type Props = {
  prod?: ProductModel | RelatedProduct;
};

export default function ProductCart({prod}: Props) {

  return (
    <div className="card">
      <img src={prod?.image ? prod.image : "https://i.pravatar.cc?u=1"}alt="..."></img>
      <div className="card-body">
        <h6 className="card-title">{prod?.name ? prod.name : "Product Name"}</h6>
        <p>{prod?.shortDescription ? prod.shortDescription : "shortDescription"}</p>
      </div> 
      <div className="d-flex">
        <NavLink to={`/detail/${prod?.id}`} className={"btn btn-success w-50 border-none"}>
          Buy Now
        </NavLink>
        <div className="product-price text-center w-50">{prod?.price.toLocaleString()}</div>
      </div>
    </div>
  );
}
