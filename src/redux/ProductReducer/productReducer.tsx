import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import axios from "axios";

export interface ProductModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}



export interface ProductDetailModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: Category[];
  relatedProducts: RelatedProduct[];
}

export interface Category {
  id: string;
  category: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
}
export type ProductState = {
  arrProduct: ProductModel[];
  arrProductDetail: ProductDetailModel | null;
};

const initialState: ProductState = {
  arrProduct: [],
  arrProductDetail:{
    "id": 1,
    "name": "Adidas Prophere",
    "alias": "adidas-prophere",
    "price": 350,
    "feature": false,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 995,
    "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    "categories": [
      {
        "id": "ADIDAS",
        "category": "ADIDAS"
      },
      {
        "id": "MEN",
        "category": "MEN"
      },
      {
        "id": "WOMEN",
        "category": "WOMEN"
      }
    ],
    "relatedProducts": [
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "feature": false,
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "feature": false,
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
      },
      {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "feature": false,
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-swift-run.png"
      }
    ]
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (
      state: ProductState,
      action: PayloadAction<ProductModel[]>
    ) => {
      state.arrProduct = action.payload;
    },
  },
  extraReducers(builder) {
builder.addCase(getProductDetailApi.fulfilled,((state:ProductState,action:PayloadAction<ProductDetailModel>) => {
  state.arrProductDetail = action.payload;
}))
  },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;

// action api

export const getProductApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await axios.get("https://shop.cyberlearn.vn/api/Product");
      const content: ProductModel[] = result.data.content;
      const action: PayloadAction<ProductModel[]> =
        setArrProductAction(content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};


// Cách 2 : create aysncthunk

export const getProductDetailApi = createAsyncThunk('productReducer/getProductDetailApi',
async (id : string | undefined) => {
const reponse =  await axios.get(`
https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}
`)
return reponse.data.content
}
)