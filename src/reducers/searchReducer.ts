import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS,
  SET_RESULT_PAGE
} from "../constants/actionTypes";
import { SearchState, Action } from "../interfaces";
import { paginate } from "./util";

const initialState: SearchState = {
  resultCount: 0,
  allCityRestaurants: [],
  currentQueryResults: [],
  currentQueryPages: new Map(),
  searchFilter: "",
  searchFilterType: null,
  resultPage: 1
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
      const newCurrentQueryPages = paginate(newState);
      console.log(newState);
      return {
        ...state,
        resultCount: newState.length,
        currentQueryResults: newState,
        allCityRestaurants: newState,
        currentQueryPages: newCurrentQueryPages
      };
    case SET_RESULT_PAGE:
      return {
        ...state,
        resultPage: newState
      };
    default:
      return state;
  }
};

export default searchReducer;
