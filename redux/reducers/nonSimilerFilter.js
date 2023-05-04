import { NON_SIMILER_FILTER } from "../actions/actions";

const initialState = {
  nonSimilerFilter: [],
};
const nonSimilerFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NON_SIMILER_FILTER:
      return {
        ...state,
        nonSimilerFilter: action.payload,
      };
    default:
      return state;
  }
};

export default nonSimilerFilterReducer;