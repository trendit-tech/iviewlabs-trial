import { ADD_CATEGORY } from "../actions/actions";

const initialState = {
  selectedCategory: "",
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
