import { SET_DUMMY, SET_ALL_CITIES } from "../constants/actionTypes";
import { Action } from "../interfaces";

export const setDummy = (b: boolean): Action => ({ type: SET_DUMMY, value: b });
export const setAllCities = (cities: ReadonlyArray<string>): Action => ({
  type: SET_ALL_CITIES,
  value: cities
});
