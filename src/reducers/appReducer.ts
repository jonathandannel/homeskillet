import { SET_DUMMY } from "../constants/actionTypes";
import { AppState, Action } from "../interfaces";

const initialState: AppState = {
  dummy: null,
  loading: true,
  selectedCity: null
};

const appReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case SET_DUMMY:
      const { value } = action;
      return {
        ...state,
        dummy: value
      };
    default:
      return state;
  }
};

export default appReducer;
