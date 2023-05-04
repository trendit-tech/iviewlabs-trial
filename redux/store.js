import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import contentfulReducer from "./reducers/contentful";
import filterReducer from "./reducers/filter";
import contentfulReducerForSingleData from "./reducers/contentfulSingleData";
import categoryReducer from "./reducers/category";
import nonSimilerFilterReducer from "./reducers/nonSimilerFilter";
import viewReducer from "./reducers/view";

const rootReducer = combineReducers({
  contentful: contentfulReducer,
  contentfulDetails: contentfulReducerForSingleData,
  filters: filterReducer,
  category:categoryReducer,
  nonSimilerFilter:nonSimilerFilterReducer,
  view:viewReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;