import { SET_DUMMY } from "../constants/actionTypes";
import { Action } from "../interfaces";

export const setDummy = (b: boolean): Action => ({ type: SET_DUMMY, value: b });
