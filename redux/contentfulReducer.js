const initialState = {
    entries: [],
    isLoading: true,
  };
  
  const contentfulReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTENTFUL_DATA_SUCCESS':
        return { ...state, entries: action.payload ,isLoading:false};
      default:
        return state;
    }
  };
  
  export default contentfulReducer;