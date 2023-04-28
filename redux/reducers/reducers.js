
import { ADD_FILTER , EMPTY_ARRAY , ADD_CATEGORY ,NON_SIMILER_FILTER} from '../actions/actions';

const initialState = {
  selectedFilters: [],
  selectedCategory:"",
  nonSimilerFilter:[]
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload]
      };
      case EMPTY_ARRAY:
      return {
        ...state,
        selectedFilters: []
      };
      case ADD_CATEGORY:
        return {
          ...state,
          selectedCategory: action.payload
        };
        case NON_SIMILER_FILTER:
        return {
          ...state,
          nonSimilerFilter: action.payload
        };
    default:
      return state;
  }
};

export default filterReducer;
