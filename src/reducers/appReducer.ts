import { SET_DUMMY, SET_ALL_CITIES } from "../constants/actionTypes";
import { AppState, Action } from "../interfaces";

const initialState: AppState = {
  dummy: null,
  loading: false,
  selectedCity: null,
  allCities: null
};

const appReducer = (state = initialState, action: Action): AppState => {
  const newVal = action.value;
  switch (action.type) {
    case SET_DUMMY:
      return {
        ...state,
        dummy: newVal
      };
    case SET_ALL_CITIES:
      return {
        ...state,
        allCities: newVal
      };
    default:
      return state;
  }
};

export default appReducer;
