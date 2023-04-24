const initialState = {
    entries: []
  };
  
  const contentfulReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTENTFUL_DATA_SUCCESS':
        return { ...state, entries: action.payload };
      default:
        return state;
    }
  };
  
  export default contentfulReducer;