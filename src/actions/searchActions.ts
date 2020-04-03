import {
  SET_SEARCH_FILTER,
  SET_FILTER_TYPE,
  SET_ALL_CITY_RESTAURANTS
} from "../constants/actionTypes";

import { Action, FilterType, Restaurant } from "../interfaces";

export const setSearchFilter = (q: string): Action => ({
  type: SET_SEARCH_FILTER,
  value: q
});

export const setFilterType = (filter: FilterType): Action => ({
  type: SET_FILTER_TYPE,
  value: filter
});
export const setAllCityRestaurants = (
  restaurants: ReadonlyArray<any>
): Action => ({
  type: SET_ALL_CITY_RESTAURANTS,
  value: restaurants
});
