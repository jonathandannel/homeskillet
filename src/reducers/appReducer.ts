import {
  SET_LOADING,
  SET_ALL_CITIES,
  SELECT_CITY
} from "../constants/actionTypes";
import { AppState, Action } from "../interfaces";

const initialState: AppState = {
  loading: false,
  selectedCity: null,
  allCities: null
};

const appReducer = (state = initialState, action: Action): AppState => {
  const newState = action.value;
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: newState
      };
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: newState
      };
    case SET_ALL_CITIES:
      return {
        ...state,
        allCities: newState
      };
    default:
      return state;
  }
};

export default appReducer;
