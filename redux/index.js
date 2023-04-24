import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import contentfulReducer from './contentfulReducer';

const rootReducer = combineReducers({
  contentful: contentfulReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;