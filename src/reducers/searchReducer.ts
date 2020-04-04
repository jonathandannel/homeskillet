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
      if (newState === null) {
        return {
          ...state,
          allCityRestaurants: [],
          currentQueryResults: [],
          currentQueryPages: new Map()
        };
      }
      const newCurrentQueryPages = paginate(newState);
      return {
        ...state,
        resultCount: newState.length,
        currentQueryResults: newState,
        allCityRestaurants: newState,
        currentQueryPages: newCurrentQueryPages
      };
    default:
      return state;
  }
};

export default searchReducer;
