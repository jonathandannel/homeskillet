import { SET_DUMMY } from "../constants/actionTypes";
import { Action } from "../actions/appActions";
import { AppState } from "../interfaces";

const initialState: AppState = {
  dummy: null
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
