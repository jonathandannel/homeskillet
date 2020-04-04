import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS,
  FILTER_RESULTS,
  CLEAR_FILTER,
} from "../constants/actionTypes";

import { Action, Restaurant } from "../interfaces";

export const setSearchFilter = (q: string): Action => ({
  type: SET_SEARCH_FILTER,
  value: q,
});

export const setFilterType = (filter: string): Action => ({
  type: SET_FILTER_TYPE,
  value: filter,
});
export const setAllCityRestaurants = (
  restaurants: ReadonlyArray<any>
): Action => ({
  type: SET_ALL_CITY_RESTAURANTS,
  value: restaurants,
});

export const filterResults = (): Action => ({
  type: FILTER_RESULTS,
  value: null,
});

export const clearFilter = (): Action => ({
  type: CLEAR_FILTER,
  value: null,
});
