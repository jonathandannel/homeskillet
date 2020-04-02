import {
  SET_LOADING,
  SELECT_CITY,
  SET_ALL_CITIES
} from "../constants/actionTypes";
import { Action } from "../interfaces";

export const setLoading = (loading: boolean): Action => ({
  type: SET_LOADING,
  value: loading
});

export const selectCity = (city: string): Action => ({
  type: SELECT_CITY,
  value: city
});
export const setAllCities = (cities: ReadonlyArray<string>): Action => ({
  type: SET_ALL_CITIES,
  value: cities
});
