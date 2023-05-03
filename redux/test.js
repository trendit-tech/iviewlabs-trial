const initialState = {
    singleEntry:[]
  };
  
const contentfulReducerForSingleData = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTENTFUL_SINGLE_DATA_SUCCESS':
        return { ...state, singleEntry: action.payload };
      default:
        return state;
    }
  };
  export default contentfulReducerForSingleData;