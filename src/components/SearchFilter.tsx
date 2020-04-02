import React, { useEffect } from "react";
import { AppState, ResultState } from "../interfaces";

interface IProps {
  appState: AppState;
}

const SearchFilter = ({ appState }: IProps) => {
  return (
    <div>
      <div>
        <input></input>
      </div>
      <div>
        <input></input>
      </div>
    </div>
  );
};
export default SearchFilter;
