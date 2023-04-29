import {
  ADD_FILTER,
  EMPTY_ARRAY,
  ADD_CATEGORY,
  NON_SIMILER_FILTER,
  EMPTY_NON_FILTER_ARRAY,
  REMOVE_FILTER,
} from "../actions/actions";

const initialState = {
  selectedFilters: [],
  selectedCategory: "",
  nonSimilerFilter: [],
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
        selectedFilters: state.selectedFilters.filter((val) => val !== action.payload),
      };
    case EMPTY_ARRAY:
      return {
        ...state,
        selectedFilters: [],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case NON_SIMILER_FILTER:
      return {
        ...state,
        nonSimilerFilter: action.payload,
      };
    case EMPTY_NON_FILTER_ARRAY:
      return {
        ...state,
        nonSimilerFilter: [],
      };
    default:
      return state;
  }
};

export default filterReducer;