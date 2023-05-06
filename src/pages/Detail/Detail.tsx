import React from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  ProductDetailModel,
  RelatedProduct,
  getProductDetailApi,
} from "../../redux/ProductReducer/productReducer";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams()
  const { arrProductDetail } = useSelector(
    (state: RootState) => state.productReducer
  );

  const dispatch: DispatchType = useDispatch();


  const getProductByIdApi = () => {
const id : string | undefined= params.id;

dispatch(getProductDetailApi(id))
  }
  React.useEffect(() => {
    getProductByIdApi()
  },[params])
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-4">
          <img
            src={
              arrProductDetail?.image
                ? arrProductDetail.image
                : "https://i.pravatar.cc?u=1"
            }
            alt="..."
            height={350}
            width={350}
            style={{ objectFit: "cover" }}
          ></img>
        </div>
        <div className="col-8">
          <h3>
            {arrProductDetail?.name ? arrProductDetail.name : "Producname"}
          </h3>
          <p>
            {arrProductDetail?.description
              ? arrProductDetail.description
              : "Producdescription"}
          </p>
        </div>
      </div>
      <h3 className="mt-2 text-center">- Realate Product -</h3>
      <div className="row">
        {arrProductDetail?.relatedProducts.map((prod: RelatedProduct) => {
          return (
            <div className="col-4">
              <ProductCart prod={prod}></ProductCart>
            </div>
          );
        })}
      </div>
    </div>
  );
}
