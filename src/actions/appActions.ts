import { SET_DUMMY } from "../constants/actionTypes";

export interface Action {
  type: string;
  value: any;
}

export const setDummy = (b: boolean): Action => ({ type: SET_DUMMY, value: b });
