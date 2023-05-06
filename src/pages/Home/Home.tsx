import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import ProductCart from "../../components/ProductCart/ProductCart";
import { ProductModel, getProductApi } from "../../redux/ProductReducer/productReducer";



export default function Home() {
  const {arrProduct} = useSelector((state:RootState) => state.productReducer);
const dispatch:DispatchType = useDispatch()
  const getAllProductApi = () => {
    const actionAsync = getProductApi()
    dispatch(actionAsync)
  }
  useEffect(() => {
    // Gọi API và đưa dữ liệu lên Redux
    getAllProductApi()
  }, [])
  
  return (
    <div className="container">
      <h3>Product Feature</h3>
      <div className="row">
        {arrProduct.map((prod:ProductModel) => {
          return <div className="col-4" key={prod.id}>
            <ProductCart prod={prod}></ProductCart>
          </div>
        } )}
      </div>
    </div>
  );
}
