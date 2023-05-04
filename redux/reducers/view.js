import { DISPLAY_VIEW } from "../actions/actions";

const initialState = {
  view: "grid",
};
const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

export default viewReducer;