import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS,
  FILTER_RESULTS,
  CLEAR_FILTER,
} from "../constants/actionTypes";
import { SearchState, Action, Restaurant } from "../interfaces";

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
      const { searchFilter, searchFilterType } = state;
      const filtered = state.allCityRestaurants.filter((r: Restaurant) =>
        r[searchFilterType]
          .toString()
          .toLowerCase()
          .includes(searchFilter.toLowerCase())
      );
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

const paginate = (data: ReadonlyArray<Restaurant>): Map<number, []> => {
  const pages = new Map();

  if (data.length <= 25) {
    pages.set(1, data);
    return pages;
  }

  let currentPage = 0;
  const pageCount = Math.ceil(data.length / 25);
  const perPage = 25;

  while (currentPage !== pageCount + 1) {
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const slice = data.slice(startIndex, endIndex);
    if (slice.length) {
      pages.set(currentPage + 1, data.slice(startIndex, endIndex));
    }
    currentPage += 1;
  }
  return pages;
};

export default searchReducer;
