import { ADD_FILTER, REMOVE_FILTER, EMPTY_ARRAY } from "../actions/actions";

const initialState = {
  selectedFilters: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        selectedFilters: state.selectedFilters.filter(
          (val) => val !== action.payload
        ),
      };
    case EMPTY_ARRAY:
      return {
        ...state,
        selectedFilters: [],
      };
    default:
      return state;
  }
};
export default filterReducer;