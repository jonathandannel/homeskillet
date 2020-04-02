import React, { useEffect } from "react";
import { AppState, ResultState } from "../interfaces";

interface IProps {
  appState: AppState;
}

const ResultList = ({ appState }: IProps) => {
  return (
    <ul>
      {["1", "2", "3"].map(r => (
        <div>r</div>
      ))}
    </ul>
  );
};
export default ResultList;
