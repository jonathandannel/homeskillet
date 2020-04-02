import { SET_DUMMY } from "../constants/actionTypes";
import { ResultState, Action } from "../interfaces";

const initialState: ResultState = {
  dummy: null,
  resultCount: 0,
  allRestaurants: []
};

const resultReducer = (state = initialState, action: Action): ResultState => {
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

export default resultReducer;
