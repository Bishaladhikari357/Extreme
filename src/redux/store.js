import { configureStore } from "@reduxjs/toolkit";
import MediaReducer from "./Slice/MediaSlice";
import CompanyProfileReducer from "./Slice/CompanyProfileSlice";
import SocialMediaReducer from"./Slice/SocialMediaSlice";
import ContactReducer from "./Slice/ContactSlice";
import ArticleReducer from "./Slice/ArticleSlice";
import ProductReducer from "./Slice/ProductSlice";
import ProductDetailReducer from "./Slice/ProductDetailSlice";
export const store = configureStore({
    reducer: {
    media: MediaReducer,
    companyProfile: CompanyProfileReducer,
    socialmedia:SocialMediaReducer,
    contact: ContactReducer,
    articles: ArticleReducer,
     products: ProductReducer,
      productDetail: ProductDetailReducer,


    },    
});