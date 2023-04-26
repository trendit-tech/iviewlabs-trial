import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import contentfulReducer from './contentfulReducer';
import filterReducer from './reducers/reducers';

const rootReducer = combineReducers({
  contentful: contentfulReducer,
  filters: filterReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;