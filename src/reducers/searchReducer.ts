import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS,
  FILTER_RESULTS,
  CLEAR_FILTER,
} from "../constants/actionTypes";
import { SearchState, Action } from "../interfaces";
import { paginate } from "./util";
import { setAllCityRestaurants } from "../actions/searchActions";

const initialState: SearchState = {
  resultCount: 0,
  allCityRestaurants: [],
  currentQueryResults: [],
  currentQueryPages: new Map(),
  searchFilter: "",
  searchFilterType: null,
};

const searchReducer = (state = initialState, action: Action): SearchState => {
  const newState = action.value;
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: newState,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        searchFilterType: newState,
      };
    case SET_ALL_CITY_RESTAURANTS:
      if (newState === null) {
        return {
          ...state,
          allCityRestaurants: [],
          currentQueryResults: [],
          currentQueryPages: new Map(),
        };
      }
      const newCurrentQueryPages = paginate(newState);
      return {
        ...state,
        resultCount: newState.length,
        currentQueryResults: newState,
        allCityRestaurants: newState,
        currentQueryPages: newCurrentQueryPages,
      };
    case FILTER_RESULTS: {
      debugger;
      const f = state.searchFilterType;
      const q = state.searchFilter;
      const filtered = state.allCityRestaurants.filter((r) =>
        r[f].toLowerCase().includes(q.toLowerCase())
      );
      debugger;
      return {
        ...state,
        resultCount: filtered.length,
        currentQueryResults: filtered,
        currentQueryPages: paginate(filtered),
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        resultCount: state.allCityRestaurants.length,
        currentQueryResults: state.allCityRestaurants,
        currentQueryPages: paginate(state.allCityRestaurants),
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
