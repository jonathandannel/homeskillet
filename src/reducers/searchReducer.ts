import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS
} from "../constants/actionTypes";
import { SearchState, Action } from "../interfaces";

const initialState: SearchState = {
  resultCount: 0,
  allCityRestaurants: [],
  searchFilter: "",
  searchFilterType: null
};

const searchReducer = (state = initialState, action: Action): SearchState => {
  const newState = action.value;
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: newState
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        searchFilterType: newState
      };
    case SET_ALL_CITY_RESTAURANTS:
      return {
        ...state,
        allCityRestaurants: newState
      };
    default:
      return state;
  }
};

export default searchReducer;
